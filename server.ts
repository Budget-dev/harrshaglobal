import express, { Request, Response, NextFunction } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import multer from 'multer';
import dotenv from 'dotenv';
import { getPrerenderedPage } from './server-prerender';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Ensure data and uploads folders exist
const dataDir = path.resolve(__dirname, 'data');
const uploadsDir = path.resolve(__dirname, 'uploads');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const applicationsFilePath = path.join(dataDir, 'applications.json');
if (!fs.existsSync(applicationsFilePath)) {
  fs.writeFileSync(applicationsFilePath, JSON.stringify([], null, 2));
}

// Multer storage for resumes
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    const sanitizedBase = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    const uniqueName = `${Date.now()}-${sanitizedBase}${ext}`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
  fileFilter: (_req, file, cb) => {
    const allowed = ['.pdf', '.doc', '.docx'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed (max 5 MB)'));
    }
  },
});

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded resumes publicly/protected
app.use('/uploads', express.static(uploadsDir));

// Rate limiting map: IP -> { count, firstSeen }
const rateLimitMap = new Map<string, { count: number; firstSeen: number }>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 10;

  const current = rateLimitMap.get(ip);
  if (!current || now - current.firstSeen > windowMs) {
    rateLimitMap.set(ip, { count: 1, firstSeen: now });
    return true;
  }

  if (current.count >= maxRequests) {
    return false;
  }

  current.count += 1;
  return true;
}

// Helper to read and write applications
function getApplications(): any[] {
  try {
    const content = fs.readFileSync(applicationsFilePath, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    console.error('Error reading applications file:', err);
    return [];
  }
}

function saveApplications(apps: any[]) {
  fs.writeFileSync(applicationsFilePath, JSON.stringify(apps, null, 2));
}

// Application submission endpoint
app.post('/api/applications', upload.single('resume'), async (req: Request, res: Response) => {
  try {
    const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';

    // 1. Check Rate Limit
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({
        success: false,
        message: 'Too many applications submitted from this IP. Please try again in 15 minutes.',
      });
    }

    const {
      name,
      phone,
      email,
      position,
      department,
      office,
      experience,
      coverNote,
      hp_field, // Honeypot field
    } = req.body;

    // 2. Honeypot check
    if (hp_field) {
      console.warn(`Spam bot caught via honeypot from IP ${clientIp}`);
      // Pretend success to bot
      return res.status(200).json({
        success: true,
        applicationId: 'HG-2026-9999',
        message: 'Application received successfully.',
      });
    }

    // 3. Validation
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Full name is required.' });
    }
    if (!phone || !/^\+?[0-9\s-]{10,14}$/.test(phone.trim())) {
      return res.status(400).json({ success: false, message: 'A valid 10-digit Indian phone number is required.' });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ success: false, message: 'A valid email address is required.' });
    }
    if (!position || !position.trim()) {
      return res.status(400).json({ success: false, message: 'Position is required.' });
    }
    if (!department || !department.trim()) {
      return res.status(400).json({ success: false, message: 'Department is required.' });
    }
    if (!office || !office.trim()) {
      return res.status(400).json({ success: false, message: 'Preferred office location is required.' });
    }
    if (!experience || !experience.trim()) {
      return res.status(400).json({ success: false, message: 'Total experience is required.' });
    }

    // 4. Generate Application ID
    const apps = getApplications();
    const nextNum = apps.length + 1;
    const applicationId = `HG-2026-${String(nextNum).padStart(4, '0')}`;
    const timestamp = new Date().toISOString();

    const resumeFile = req.file
      ? {
          filename: req.file.filename,
          originalName: req.file.originalname,
          size: req.file.size,
          mimetype: req.file.mimetype,
          url: `/uploads/${req.file.filename}`,
        }
      : null;

    const newApplication = {
      id: applicationId,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      position: position.trim(),
      department: department.trim(),
      office: office.trim(),
      experience: experience.trim(),
      coverNote: (coverNote || '').trim(),
      resume: resumeFile,
      timestamp,
      clientIp,
      status: 'Received',
    };

    apps.unshift(newApplication);
    saveApplications(apps);

    console.log(`[Application Recorded] ID: ${applicationId} for candidate ${name.trim()} (${position.trim()})`);

    return res.status(200).json({
      success: true,
      applicationId,
      message: 'Application submitted successfully.',
    });
  } catch (error: any) {
    console.error('Application submit error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'An unexpected error occurred while processing your application.',
    });
  }
});

// Canonical, HTTPS, and Legacy URL Redirect Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const host = (req.headers.host || '').toLowerCase();
  const proto = ((req.headers['x-forwarded-proto'] as string) || req.protocol).toLowerCase();

  // 1. Force canonical domain: harrshaglobal.com -> https://www.harrshaglobal.com
  if (host === 'harrshaglobal.com') {
    return res.redirect(301, `https://www.harrshaglobal.com${req.originalUrl}`);
  }

  // 2. Force HTTPS on custom domain
  if (host.includes('harrshaglobal.com') && proto === 'http') {
    return res.redirect(301, `https://${host}${req.originalUrl}`);
  }

  // 3. Remove trailing slashes (except root '/')
  if (req.path.length > 1 && req.path.endsWith('/')) {
    const query = req.url.slice(req.path.length);
    return res.redirect(301, req.path.slice(0, -1) + query);
  }

  // 4. Legacy routes mapping (301 permanent redirects)
  const legacyRedirects: Record<string, string> = {
    '/services/mines-minerals': '/mining',
    '/services/sponge-iron': '/sponge-iron',
    '/services/granite': '/granite',
    '/services/bulletproof-sheet-manufacturing': '/bulletproof-sheets',
    '/services/real-estate-infrastructure': '/real-estate-infrastructure',
    '/portfolio': '/projects',
    '/blog': '/news',
  };

  if (legacyRedirects[req.path]) {
    return res.redirect(301, legacyRedirects[req.path]);
  }

  next();
});

// Explicit sitemap.xml and robots.txt headers
app.get('/robots.txt', (_req: Request, res: Response) => {
  const robotsPath = path.resolve(__dirname, 'public', 'robots.txt');
  res.type('text/plain; charset=UTF-8');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.sendFile(robotsPath);
});

app.get('/sitemap.xml', (_req: Request, res: Response) => {
  const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');
  res.type('application/xml; charset=UTF-8');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.sendFile(sitemapPath);
});

// Start dev Vite or serve production build with full SSR/Pre-rendering
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';
  const indexPath = isProd
    ? path.resolve(__dirname, 'dist', 'index.html')
    : path.resolve(__dirname, 'index.html');

  if (isProd) {
    const distPath = path.resolve(__dirname, 'dist');
    // Serve static assets with caching headers
    app.use(express.static(distPath, { index: false, maxAge: '7d' }));
  }

  let vite: any = null;
  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    // Mount vite static asset middleware (excluding HTML route handler)
    app.use(vite.middlewares);
  }

  // Route HTML requests through Pre-rendering engine
  app.get('*', async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;

    // Skip internal Vite or static requests
    if (
      url.startsWith('/api') ||
      url.startsWith('/@') ||
      url.startsWith('/src') ||
      url.startsWith('/node_modules') ||
      url.includes('.')
    ) {
      return next();
    }

    try {
      let rawTemplate = fs.readFileSync(indexPath, 'utf-8');

      // In dev, apply Vite HTML transforms (HMR client scripts, module imports)
      if (!isProd && vite) {
        rawTemplate = await vite.transformIndexHtml(url, rawTemplate);
      }

      // If accessing admin routes, return clean SPA template without indexing
      if (req.path.startsWith('/admin')) {
        let adminHtml = rawTemplate.replace(
          /<meta\s+name="robots"\s+content=".*?"\s*\/?>/i,
          '<meta name="robots" content="noindex, nofollow" />'
        );
        res.setHeader('X-Robots-Tag', 'noindex, nofollow');
        return res.status(200).set({ 'Content-Type': 'text/html; charset=UTF-8' }).end(adminHtml);
      }

      // Process route with SSR Prerendering Engine
      const { html, status } = getPrerenderedPage(req.path, rawTemplate);

      res.setHeader('X-Content-Type-Options', 'nosniff');
      if (status === 404) {
        res.setHeader('X-Robots-Tag', 'noindex, follow');
      }

      return res.status(status).set({ 'Content-Type': 'text/html; charset=UTF-8' }).end(html);
    } catch (e: any) {
      if (!isProd && vite) {
        vite.ssrFixStacktrace(e);
      }
      console.error('Prerender error:', e);
      next(e);
    }
  });

  app.listen(PORT, HOST, () => {
    console.log(`Server listening at http://${HOST}:${PORT} [SEO Prerender Enabled]`);
  });
}

startServer();
