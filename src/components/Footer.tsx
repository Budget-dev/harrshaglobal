import React from 'react';
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react";
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
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
            <p className="mb-6 text-zinc-500 dark:text-zinc-400">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-500 dark:placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-300 pr-12 backdrop-blur-sm"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 transition-transform hover:scale-105 focus:outline-none"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-zinc-900/10 dark:bg-white/10 blur-2xl" />
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-3 text-sm">
              <Link to="/about" className="block text-zinc-500 dark:text-zinc-400 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50">
                About Us
              </Link>
              <a href="/#services" className="block text-zinc-500 dark:text-zinc-400 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50">
                Services
              </a>
              <Link to="/services/bulletproof-sheet-manufacturing" className="block text-zinc-500 dark:text-zinc-400 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50">
                Products
              </Link>
              <Link to="/blog" className="block text-zinc-500 dark:text-zinc-400 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50">
                Blog
              </Link>
              <Link to="/contact" className="block text-zinc-500 dark:text-zinc-400 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50">
                Contact
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-3 text-sm not-italic text-zinc-500 dark:text-zinc-400">
              <p>Visakhapatnam</p>
              <p>Andhra Pradesh, India</p>
              <p>Phone: +91 73967 34389</p>
              <p>Email: info@harrsha.com</p>
            </address>
          </div>
          
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <button title="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </button>
              <button title="Twitter" className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </button>
              <button title="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </button>
              <button title="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-3">
              <Sun className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
              <button
                type="button"
                role="switch"
                aria-checked={isDarkMode}
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-950 ${
                  isDarkMode ? 'bg-zinc-50' : 'bg-zinc-900'
                }`}
              >
                <span className="sr-only">Toggle dark mode</span>
                <span
                  className={`pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform ${
                    isDarkMode ? 'translate-x-4 bg-zinc-950' : 'translate-x-0'
                  }`}
                />
              </button>
              <Moon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 dark:border-zinc-800 pt-8 text-center md:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © 2026 Harrsha Global. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <a href="#" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50">
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
