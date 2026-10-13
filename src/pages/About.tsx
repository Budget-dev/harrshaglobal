import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AboutUsSection } from '../components/AboutUsSection';
import { SEO } from '../components/SEO';
import { FadeIn } from '../components/FadeIn';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  Factory, 
  Gem, 
  Pickaxe, 
  Zap, 
  Users 
} from 'lucide-react';

export function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.harrshaglobal.com/' },
    { name: 'About Us', url: 'https://www.harrshaglobal.com/about' },
  ];

  const faqs = [
    {
      q: 'What industries does Harrsha Global operate in?',
      a: 'Harrsha Global Private Limited operates across core heavy industries: iron ore mining and dry screening, direct-reduced sponge iron manufacturing, natural granite quarrying and export, ballistic-grade bulletproof sheet manufacturing, 100-acre solar utility generation, and real estate infrastructure developments across India.',
    },
    {
      q: 'Where is Harrsha Global headquartered and where are its operational hubs?',
      a: 'Harrsha Global is headquartered in Visakhapatnam, Andhra Pradesh (with corporate offices at Muralinagar, Kancharapalem, and Rushikonda IT SEZ). Our active mining and sponge iron complexes are located in Ballari, Karnataka, while our dimensional stone granite quarries are positioned in Chimakkurthy and Prakasam district.',
    },
    {
      q: 'Is Harrsha Global the same as Harsha Global or Harsha Engineers?',
      a: 'Harrsha Global Private Limited (spelled with a double "r", and also searched as Harsha Global) is an independent Indian diversified industrial conglomerate. We are distinct from Harsha Engineers; our corporate focus lies in heavy mining, metallurgical raw materials, defense polymers, stone export, and infrastructure development.',
    },
    {
      q: 'What certifications and quality standards does Harrsha Global adhere to?',
      a: 'Our products comply with stringent national and global quality benchmarks: Fe 64.5% basis calibrated iron ore, ASTM ballistic standards (Level NIJ III and IV) for bulletproof composite sheets, ISO 9001 quality management, and strict DGMS (Directorate General of Mines Safety) zero-harm protocols across all quarrying sites.',
    },
  ];

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Harrsha Global Private Limited',
    url: 'https://www.harrshaglobal.com/about',
    description: 'Learn about Harrsha Global (also searched as Harsha Global), an Indian industrial conglomerate in mining, sponge iron, granite, bulletproof sheets, and infrastructure.',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: b.url,
      })),
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    },
  };

  return (
    <>
      <SEO 
        title="About Harrsha Global | Mining, Sponge Iron & Industrial Conglomerate"
        description="Learn about Harrsha Global (also searched as Harsha Global), an Indian industrial leader in iron ore mining, sponge iron, granite, bulletproof glass & real estate."
        url="/about"
        schema={aboutSchema}
      />

      <div className="bg-white min-h-screen pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8">
            <Link to="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-800 font-semibold">About Us</span>
          </nav>

          {/* Hero Section */}
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">
                Corporate Overview & Heritage
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0B1530] tracking-tight mb-6">
                About Harrsha Global Private Limited
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light">
                <strong>Harrsha Global</strong> (also searched as Harsha Global) is a diversified Indian industrial conglomerate headquartered in Visakhapatnam, Andhra Pradesh. We pioneer high-yield operations across Mining, Sponge Iron Manufacturing, Granite & Natural Stones, Defense Bulletproof Sheets, Solar Clean Energy, and Real Estate Infrastructure.
              </p>
            </div>
          </FadeIn>

          {/* Comprehensive 500+ Word Industrial Narrative */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            <div className="md:col-span-2 space-y-6 text-sm text-slate-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#0B1530]">
                Engineering Industrial Self-Reliance Across Key Sectors
              </h2>
              <p>
                Founded on the pillars of integrity, operational precision, and sustainable industrial growth, Harrsha Global has expanded from regional natural resource logistics into an integrated multi-division conglomerate. Our operations span heavy mineral concessions in Ballari (Karnataka), world-renowned Black Galaxy granite quarries in Chimakkurthy (Andhra Pradesh), high-temperature sponge iron rotary kilns, and state-of-the-art ballistic polymer manufacturing facilities in Visakhapatnam.
              </p>
              <p>
                Whether fulfilling continuous bulk supply agreements of calibrated Fe 64.5% iron ore lumps for primary steel plants or manufacturing Level NIJ IV ballistic composite panels for tactical armored vehicles and high-security financial infrastructure, Harrsha Global enforces stringent zero-defect quality benchmarks.
              </p>
              <p>
                Our real estate and infrastructure division has simultaneously shaped prime commercial and residential corridors in Visakhapatnam, including IT SEZ expansions in Rushikonda, industrial warehousing hubs, and modern integrated townships that drive economic vitality throughout Coastal Andhra Pradesh.
              </p>

              <h3 className="text-lg font-bold text-[#0B1530] pt-4">
                Core Production Capacities & Standards
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
                <li><strong>Mining & Minerals:</strong> Multi-million ton annual throughput of dry-screened iron ore lumps (5mm-18mm), iron ore fines (Fe 62%+), and metallurgical coal.</li>
                <li><strong>Sponge Iron:</strong> High-metallization (Fe 80%+) direct reduced iron manufactured in rotary kilns for induction and electric arc steel furnaces.</li>
                <li><strong>Granite & Architectural Stone:</strong> Diamond-wire quarrying producing high-density gangsaw blocks and mirror-polished slabs of Black Galaxy, Steel Grey, and Absolute Black.</li>
                <li><strong>Bulletproof Sheet Fabrication:</strong> Multi-layer ballistic polycarbonate and aramid laminates certified under international NIJ standards.</li>
                <li><strong>Solar Clean Energy:</strong> 100-acre utility-scale solar photovoltaic installation supporting regional carbon-neutral power grids.</li>
              </ul>
            </div>

            {/* Quick Facts Sidebar */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 self-start">
              <h3 className="text-base font-bold text-[#0B1530] uppercase tracking-wide border-b border-slate-200 pb-3 flex items-center gap-2">
                <Building2 size={18} className="text-blue-700" /> Key Company Facts
              </h3>
              
              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-slate-400 block font-semibold uppercase text-[10px]">Legal Entity</span>
                  <span className="font-bold text-slate-800 text-sm">Harrsha Global Private Limited</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold uppercase text-[10px]">Alternate Brand Search</span>
                  <span className="font-medium text-slate-700">Harsha Global</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold uppercase text-[10px]">Headquarters</span>
                  <span className="font-medium text-slate-800">Visakhapatnam, Andhra Pradesh, India</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold uppercase text-[10px]">Operating Hubs</span>
                  <span className="font-medium text-slate-700">Ballari (Karnataka), Prakasam, Vizag IT SEZ</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold uppercase text-[10px]">Primary Divisions</span>
                  <span className="font-medium text-slate-700">Mining, Sponge Iron, Granite, Bulletproof, Real Estate, Solar</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold uppercase text-[10px]">Official Website</span>
                  <a href="https://www.harrshaglobal.com" className="font-bold text-blue-700 hover:underline">
                    www.harrshaglobal.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Feature Visuals */}
          <div className="mb-20">
            <AboutUsSection />
          </div>

          {/* FAQ Accordion Section for Rich Snippets */}
          <div className="max-w-4xl mx-auto pt-8 border-t border-slate-200">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-2">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1530]">
                Frequently Asked Questions About Harrsha Global
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm md:text-base cursor-pointer hover:bg-slate-50"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 transition-transform ${openFaq === index ? 'rotate-180 text-blue-700' : ''}`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
