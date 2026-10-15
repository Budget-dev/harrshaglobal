import React from 'react';
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter, MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import { Link } from 'react-router-dom';

export function Footer() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <footer className="relative border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand & Newsletter */}
          <div className="relative">
            <h2 className="mb-2 text-2xl font-black tracking-tight text-[#0B1530] dark:text-white">
              HARRSHA GLOBAL
            </h2>
            <p className="text-xs text-blue-700 dark:text-blue-400 font-bold uppercase tracking-wider mb-4">
              Private Limited · Industrial Group
            </p>
            <p className="mb-5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Diversified Indian industrial conglomerate operating in iron ore mining, sponge iron, granite stone export, bulletproof defense composites, and real estate infrastructure.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter corporate email..."
                className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-3.5 py-2.5 text-xs placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#0B1530] pr-12"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-[#0B1530] text-white transition-transform hover:scale-105"
                title="Subscribe to market updates"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
          
          {/* Core Industrial Divisions */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Industrial Divisions
            </h3>
            <nav className="space-y-2.5 text-xs">
              <Link to="/mining" className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                Mines & Mineral Processing
              </Link>
              <Link to="/sponge-iron" className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                Sponge Iron & Steel Plant
              </Link>
              <Link to="/granite" className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                Granite & Natural Stone Quarries
              </Link>
              <Link to="/bulletproof-sheets" className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                Bulletproof Sheet Manufacturing
              </Link>
              <Link to="/real-estate-infrastructure" className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                Real Estate & Infrastructure
              </Link>
              <Link to="/gallery" className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                Industrial Media Gallery
              </Link>
            </nav>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Company & Careers
            </h3>
            <nav className="space-y-2.5 text-xs">
              <Link to="/about" className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                About Harrsha Global
              </Link>
              <Link to="/projects" className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                Projects Portfolio
              </Link>
              <Link to="/news" className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                News & Industry Insights
              </Link>
              <Link to="/careers" className="block text-blue-700 dark:text-blue-400 font-bold hover:underline transition-colors">
                Careers & Openings (49 Posts)
              </Link>
              <Link to="/office-staff-recruitment" className="block text-emerald-700 dark:text-emerald-400 font-semibold hover:underline transition-colors">
                Office Staff Recruitment (A-Z)
              </Link>
              <Link to="/contact" className="block text-zinc-600 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                Contact & Procurement
              </Link>
              <div className="pt-2">
                <Link 
                  to="/admin" 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B1530] text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-blue-900 transition-all text-xs font-semibold shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Admin Portal
                </Link>
              </div>
            </nav>
          </div>
          
          {/* Verified NAP Details */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Corporate Headquarters
            </h3>
            <address className="space-y-3 text-xs not-italic text-zinc-600 dark:text-zinc-400">
              <p className="font-bold text-slate-900 dark:text-slate-100">
                Harrsha Global Private Limited
              </p>
              <p className="leading-relaxed">
                Muralinagar, Kancharapalem, Rushikonda IT SEZ, Visakhapatnam, Andhra Pradesh 530007, India
              </p>
              <p>
                <strong>Tel:</strong>{' '}
                <a href="tel:9491750999" className="hover:text-blue-700">+91 9491750999</a> /{' '}
                <a href="tel:7396734389" className="hover:text-blue-700">+91 73967 34389</a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@harrshaglobal.com" className="hover:text-blue-700">info@harrshaglobal.com</a>
              </p>
            </address>

            {/* Social Icons & Dark Mode */}
            <div className="mt-5 flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <div className="flex space-x-2">
                <a href="https://www.linkedin.com/company/harrsha-global" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-blue-700 hover:border-blue-300 transition-colors">
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
                <a href="https://www.facebook.com/harrshaglobal" target="_blank" rel="noopener noreferrer" title="Facebook" className="w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-blue-700 hover:border-blue-300 transition-colors">
                  <Facebook className="h-3.5 w-3.5" />
                </a>
                <a href="https://www.instagram.com/harrshaglobal" target="_blank" rel="noopener noreferrer" title="Instagram" className="w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-blue-700 hover:border-blue-300 transition-colors">
                  <Instagram className="h-3.5 w-3.5" />
                </a>
                <a href="https://twitter.com/harrshaglobal" target="_blank" rel="noopener noreferrer" title="Twitter" className="w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-blue-700 hover:border-blue-300 transition-colors">
                  <Twitter className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Sun className="h-3.5 w-3.5 text-zinc-400" />
                <button
                  type="button"
                  role="switch"
                  aria-checked={isDarkMode}
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`relative inline-flex h-4 w-8 shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-colors ${
                    isDarkMode ? 'bg-zinc-700' : 'bg-zinc-300'
                  }`}
                >
                  <span
                    className={`block h-3 w-3 rounded-full bg-white shadow transition-transform ${
                      isDarkMode ? 'translate-x-4' : 'translate-x-0.5'
                    }`}
                  />
                </button>
                <Moon className="h-3.5 w-3.5 text-zinc-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar with Real Links */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 dark:border-zinc-800 pt-6 text-center md:flex-row text-xs">
          <p className="text-zinc-500 dark:text-zinc-400">
            © 2026 Harrsha Global Private Limited. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-5 text-zinc-500 dark:text-zinc-400">
            <Link to="/privacy-policy" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Terms of Service
            </Link>
            <a href="https://www.harrshaglobal.com/sitemap.xml" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Sitemap
            </a>
            <Link to="/admin" className="text-blue-700 dark:text-blue-400 font-semibold hover:underline">
              Admin Portal
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
