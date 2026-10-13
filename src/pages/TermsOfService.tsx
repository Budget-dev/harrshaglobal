import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Scale, FileCheck, AlertCircle, ChevronRight } from 'lucide-react';

export function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.harrshaglobal.com/' },
    { name: 'Terms of Service', url: 'https://www.harrshaglobal.com/terms' },
  ];

  return (
    <>
      <SEO
        title="Terms of Service | Harrsha Global Private Limited"
        description="Terms of service and legal agreement governing the use of Harrsha Global Private Limited website, commercial industrial contracts, and trade terms."
        url="/terms"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Terms of Service | Harrsha Global',
          url: 'https://www.harrshaglobal.com/terms',
          description: 'Terms of service for Harrsha Global Private Limited.',
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
            <span className="text-slate-800 font-semibold">Terms of Service</span>
          </nav>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center">
                <Scale size={26} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B1530] tracking-tight">
                  Terms of Service
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Harrsha Global Private Limited · Effective Date: January 2026
                </p>
              </div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-6">
              <p>
                Welcome to the website of <strong>Harrsha Global Private Limited</strong> (&ldquo;Harrsha Global&rdquo;). By accessing our website (<a href="https://www.harrshaglobal.com" className="text-blue-700 underline">www.harrshaglobal.com</a>) or engaging with our industrial divisions (Mining, Sponge Iron, Granite, Bulletproof Composites, Real Estate & Infrastructure), you agree to comply with and be bound by the following terms and conditions.
              </p>

              <h2 className="text-xl font-bold text-[#0B1530] pt-4 border-t border-slate-100">
                1. Intellectual Property
              </h2>
              <p>
                All trademarks, brand names (&ldquo;Harrsha Global&rdquo;), logos, imagery, technical specifications, product data sheets, and website architecture are the exclusive property of Harrsha Global Private Limited. Unauthorized duplication, redistribution, or modification is prohibited under Indian and international copyright laws.
              </p>

              <h2 className="text-xl font-bold text-[#0B1530] pt-4 border-t border-slate-100">
                2. Commercial Inquiries & Quotes
              </h2>
              <p>
                Product descriptions, grades (e.g., Fe 64.5% calibrated iron ore, Fe 80%+ DRI sponge iron, ballistic Level NIJ IV bulletproof sheets, premium granite dimensional slabs), and pricing information provided on this website are indicative and subject to written formal contract execution. Formal agreements, purchase orders, and letters of credit prevail over preliminary web quotations.
              </p>

              <h2 className="text-xl font-bold text-[#0B1530] pt-4 border-t border-slate-100">
                3. Career Submissions & Accurate Representation
              </h2>
              <p>
                Candidates submitting applications through our Careers portal warrant that all provided experience, qualifications, licenses, and background information are truthful, authentic, and complete. Any intentional misrepresentation constitutes grounds for immediate application disqualification or termination of employment.
              </p>

              <h2 className="text-xl font-bold text-[#0B1530] pt-4 border-t border-slate-100">
                4. Limitation of Liability
              </h2>
              <p>
                Harrsha Global strives to keep all published operational metrics, mining concession details, and infrastructure portfolio data accurate. However, we assume no liability for indirect, incidental, or consequential damages resulting from reliance on website materials without prior written verification from authorized company directors.
              </p>

              <h2 className="text-xl font-bold text-[#0B1530] pt-4 border-t border-slate-100">
                5. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of the Republic of India. Any legal disputes arising in connection with this website or company operations fall under the exclusive jurisdiction of the competent courts in Visakhapatnam, Andhra Pradesh, India.
              </p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-800 space-y-1">
                <p><strong>Corporate Secretariat & Legal Counsel:</strong></p>
                <p>Harrsha Global Private Limited, Visakhapatnam, Andhra Pradesh, India</p>
                <p>Inquiries: <a href="mailto:info@harrshaglobal.com" className="text-blue-700 underline">info@harrshaglobal.com</a> · Phone: +91 9491750999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
