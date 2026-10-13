import express, { Request, Response, NextFunction } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import multer from 'multer';
import dotenv from 'dotenv';

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

// Admin Authentication & Listing
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'harrsha2026';

app.post('/api/admin/login', (req: Request, res: Response) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    return res.json({ success: true, token: ADMIN_PASSWORD });
  }
  return res.status(401).json({ success: false, message: 'Invalid administrative password.' });
});

function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization']?.replace('Bearer ', '') || req.headers['x-admin-key'];
  if (token === ADMIN_PASSWORD) {
    return next();
  }
  return res.status(401).json({ success: false, message: 'Unauthorized. Admin credentials required.' });
}

app.get('/api/admin/applications', requireAdmin, (req: Request, res: Response) => {
  const apps = getApplications();
  return res.json({ success: true, applications: apps });
});

app.delete('/api/admin/applications/:id', requireAdmin, (req: Request, res: Response) => {
  const { id } = req.params;
  const apps = getApplications();
  const filtered = apps.filter((a) => a.id !== id);
  if (filtered.length === apps.length) {
    return res.status(404).json({ success: false, message: 'Application not found' });
  }
  saveApplications(filtered);
  return res.json({ success: true, message: 'Application removed successfully' });
});

app.get('/api/admin/export-csv', requireAdmin, (req: Request, res: Response) => {
  const apps = getApplications();
  const headers = ['Application ID', 'Date', 'Full Name', 'Phone', 'Email', 'Position', 'Department', 'Preferred Office', 'Experience', 'Resume File', 'Cover Note'];
  
  const csvRows = [headers.join(',')];
  for (const app of apps) {
    const row = [
      `"${app.id}"`,
      `"${app.timestamp}"`,
      `"${(app.name || '').replace(/"/g, '""')}"`,
      `"${(app.phone || '').replace(/"/g, '""')}"`,
      `"${(app.email || '').replace(/"/g, '""')}"`,
      `"${(app.position || '').replace(/"/g, '""')}"`,
      `"${(app.department || '').replace(/"/g, '""')}"`,
      `"${(app.office || '').replace(/"/g, '""')}"`,
      `"${(app.experience || '').replace(/"/g, '""')}"`,
      `"${(app.resume?.originalName || '').replace(/"/g, '""')}"`,
      `"${(app.coverNote || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
    ];
    csvRows.push(row.join(','));
  }

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="harrsha_applications.csv"');
  res.send(csvRows.join('\n'));
});

// Start dev Vite or serve production build
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, HOST, () => {
    console.log(`Server listening at http://${HOST}:${PORT}`);
  });
}

startServer();
