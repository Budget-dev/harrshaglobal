import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Home, ArrowLeft, Search, FileQuestion } from 'lucide-react';

export function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="404 - Page Not Found | Harrsha Global"
        description="The requested page could not be found on Harrsha Global Private Limited official website. Explore our mining, sponge iron, granite, and infrastructure divisions."
        url="/404"
      />

      <div className="min-h-[80vh] flex items-center justify-center bg-[#F8FAFC] px-6 py-28 text-center">
        <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 text-[#0B1530] flex items-center justify-center mx-auto mb-4">
            <FileQuestion size={32} />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-md inline-block mb-3">
            Error 404
          </span>

          <h1 className="text-2xl md:text-3xl font-extrabold text-[#0B1530] mb-2">
            Page Not Found
          </h1>

          <p className="text-xs md:text-sm text-slate-500 mb-6 leading-relaxed">
            The page you requested may have moved or been updated. You can return to our homepage or browse our core industrial divisions below.
          </p>

          <div className="space-y-2 mb-6 text-xs text-left">
            <Link to="/mining" className="block p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold transition-colors">
              ⛏️ Mining & Calibrated Iron Ore →
            </Link>
            <Link to="/sponge-iron" className="block p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold transition-colors">
              🏭 Sponge Iron & Steel Reduction →
            </Link>
            <Link to="/granite" className="block p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold transition-colors">
              💎 Granite Quarrying & Natural Stone →
            </Link>
            <Link to="/bulletproof-sheets" className="block p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold transition-colors">
              🛡️ Bulletproof Sheet Manufacturing →
            </Link>
            <Link to="/careers" className="block p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold transition-colors">
              💼 Open Careers & Job Listings →
            </Link>
          </div>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 w-full bg-[#0B1530] hover:bg-blue-950 text-white font-bold py-3 px-6 rounded-xl text-xs transition-all shadow-sm"
          >
            <Home size={15} />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </>
  );
}
