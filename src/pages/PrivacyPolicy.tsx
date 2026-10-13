import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ShieldCheck, Lock, Eye, FileText, ChevronRight } from 'lucide-react';

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.harrshaglobal.com/' },
    { name: 'Privacy Policy', url: 'https://www.harrshaglobal.com/privacy-policy' },
  ];

  return (
    <>
      <SEO
        title="Privacy Policy | Harrsha Global Private Limited"
        description="Official privacy policy of Harrsha Global Private Limited. Learn how we safeguard your personal data, business communications, and online security."
        url="/privacy-policy"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Privacy Policy | Harrsha Global',
          url: 'https://www.harrshaglobal.com/privacy-policy',
          description: 'Privacy policy for Harrsha Global Private Limited.',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbs.map((b, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: b.name,
              item: b.url,
            })),
          },
        }}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-28 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8">
            <Link to="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-800 font-semibold">Privacy Policy</span>
          </nav>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center">
                <ShieldCheck size={26} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B1530] tracking-tight">
                  Privacy Policy
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Harrsha Global Private Limited · Last Updated: January 2026
                </p>
              </div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-6">
              <p>
                At <strong>Harrsha Global Private Limited</strong> (&ldquo;Harrsha Global&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we prioritize the confidentiality and protection of our clients, suppliers, job candidates, and website visitors. This Privacy Policy outlines the types of personal and commercial data we collect, how it is used, and the security measures we employ across our digital platforms and industrial operations.
              </p>

              <h2 className="text-xl font-bold text-[#0B1530] pt-4 border-t border-slate-100">
                1. Information We Collect
              </h2>
              <p>
                We collect personal information directly when you interact with our website (<a href="https://www.harrshaglobal.com" className="text-blue-700 underline">www.harrshaglobal.com</a>), submit inquiries, apply for careers, or engage in commercial transactions:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Contact Information:</strong> Name, professional title, corporate email address, phone number, and physical office location.</li>
                <li><strong>Career Application Data:</strong> Resumes, educational credentials, work experience history, and cover letters submitted through our recruitment portal.</li>
                <li><strong>Commercial Inquiry Data:</strong> Sourcing specifications for sponge iron, granite slabs, iron ore lumps, coal grades, bulletproof composite panels, or infrastructure investments.</li>
                <li><strong>Technical Diagnostics:</strong> IP addresses, browser types, device identifiers, and pages visited, collected strictly to optimize website performance and prevent automated cyber threats.</li>
              </ul>

              <h2 className="text-xl font-bold text-[#0B1530] pt-4 border-t border-slate-100">
                2. How We Utilize Your Information
              </h2>
              <p>
                Harrsha Global uses collected data exclusively for legitimate industrial and commercial purposes:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Processing raw material orders, logistics schedules, and product specification requests.</li>
                <li>Facilitating recruitment evaluations, interviews, and candidate record-keeping.</li>
                <li>Complying with statutory regulations, mining safety protocols, and Indian corporate governance laws.</li>
                <li>Maintaining cybersecurity resilience and detecting malicious spam submissions.</li>
              </ul>

              <h2 className="text-xl font-bold text-[#0B1530] pt-4 border-t border-slate-100">
                3. Information Sharing & Third Parties
              </h2>
              <p>
                We do not sell, rent, or trade your personal information to third-party marketers. Data may only be shared with verified service providers (e.g., cloud hosting, enterprise logistics providers, background verification partners) strictly bound by contractual confidentiality agreements.
              </p>

              <h2 className="text-xl font-bold text-[#0B1530] pt-4 border-t border-slate-100">
                4. Data Security & Storage
              </h2>
              <p>
                All data submitted to Harrsha Global is encrypted in transit via SSL/TLS protocols and stored in enterprise-grade secured cloud environments (including Google Cloud Firestore with restricted access rules). Administrative access is strictly limited to authorized personnel using two-factor authentication.
              </p>

              <h2 className="text-xl font-bold text-[#0B1530] pt-4 border-t border-slate-100">
                5. Contact Our Privacy Officer
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to request data correction or deletion, please reach out directly:
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-800 space-y-1">
                <p><strong>Harrsha Global Private Limited</strong></p>
                <p>Corporate Office: Muralinagar / Kancharapalem / Rushikonda IT SEZ, Visakhapatnam, Andhra Pradesh, India</p>
                <p>Email: <a href="mailto:info@harrshaglobal.com" className="text-blue-700 underline">info@harrshaglobal.com</a></p>
                <p>Phone: +91 9491750999 / +91 73967 34389</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
