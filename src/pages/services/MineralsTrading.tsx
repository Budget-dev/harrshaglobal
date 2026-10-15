import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../components/FadeIn';
import { SEO } from '../../components/SEO';
import { ChevronRight, Award, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export function MineralsTrading() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.harrshaglobal.com/' },
    { name: 'Industrial Minerals & Coal', url: 'https://www.harrshaglobal.com/minerals' },
  ];

  const minerals = [
    {
      name: 'High-Calorific Steam Coal (Non-Coking)',
      grade: 'Grade G3 - G7 (5800 - 6400 Kcal/Kg)',
      desc: 'Screened thermal coal specifically supplied for sponge iron rotary kilns, captive power plants, and industrial boilers across India and international ports.',
      specs: [
        { label: 'Gross Calorific Value', value: '5800 - 6400 Kcal/Kg' },
        { label: 'Total Moisture', value: '< 12% Max' },
        { label: 'Ash Content', value: '12% - 16%' },
        { label: 'Volatile Matter', value: '28% - 32%' },
      ],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
    },
    {
      name: 'Metallurgical Manganese Ore',
      grade: 'Mn 38% - 46% Prime Silico Grade',
      desc: 'High-grade manganese ore essential for manufacturing silico-manganese and ferro-manganese alloys that boost structural steel tensile yield strength.',
      specs: [
        { label: 'Mn Core Content', value: '42.0% Basis' },
        { label: 'Iron (Fe) Content', value: '8% - 12% Max' },
        { label: 'Silica (SiO2)', value: '7% - 9% Max' },
        { label: 'Phosphorus (P)', value: '< 0.08% Max' },
      ],
      image: 'https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?auto=format&fit=crop&q=80&w=1200',
    },
    {
      name: 'Calibrated Iron Ore Fines (Fe 62%)',
      grade: 'Sintering & Pelletization Grade',
      desc: 'High-density mineral fines processed through mechanical wet/dry classification systems for blast furnace sintering lines and DRI pellet plants.',
      specs: [
        { label: 'Fe Core Ratio', value: '62.0% Basis' },
        { label: 'Sizing Profile', value: '0mm - 10mm (< 100 Mesh)' },
        { label: 'Alumina (Al2O3)', value: '2.2% Max' },
        { label: 'Silica (SiO2)', value: '3.5% Max' },
      ],
      image: 'https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM.jpeg',
    },
    {
      name: 'Industrial Dolomite & Flux Minerals',
      grade: 'MgO 19% - 21% / CaO 29% - 31%',
      desc: 'Refractory flux mineral utilized extensively in oxygen furnace lining protection, steel slag conditioning, and agricultural soil amendments.',
      specs: [
        { label: 'MgO Content', value: '20.5% Basis' },
        { label: 'CaO Content', value: '30.5% Basis' },
        { label: 'Silica Content', value: '< 1.5% Max' },
        { label: 'Loss on Ignition (LOI)', value: '44% - 46%' },
      ],
      image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=1200',
    },
  ];

  const mineralsSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Industrial Minerals Trading & Bulk Supply',
    provider: {
      '@type': 'Organization',
      name: 'Harrsha Global Private Limited',
      url: 'https://www.harrshaglobal.com',
    },
    description: 'Bulk sourcing, trading, and logistics for steam coal, manganese ore, calibrated iron ore fines, and metallurgical flux minerals across India and global export markets.',
    areaServed: 'India & International',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Industrial Minerals Trading Catalog',
      itemListElement: minerals.map((m) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: m.name,
          description: m.desc,
        },
      })),
    },
  };

  return (
    <>
      <SEO 
        title="Industrial Minerals & Coal Trading India | Harrsha Global"
        description="Harrsha Global supplies steam coal, metallurgical manganese ore, iron ore fines, and dolomite to steel plants and power utilities across India and worldwide."
        url="/minerals"
        schema={[
          mineralsSchema,
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbs.map((b, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: b.name,
              item: b.url,
            })),
          },
        ]}
      />

      <div className="pt-28 pb-20 min-h-screen bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8">
            <Link to="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-800 font-semibold">Minerals & Coal</span>
          </nav>

          {/* Hero Header */}
          <FadeIn>
            <div className="max-w-3xl mb-12">
              <span className="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                Bulk Commodity Sourcing & Metallurgical Supply
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1530] tracking-tight mb-4">
                Industrial Minerals & Coal Trading in India
              </h1>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                Harrsha Global Private Limited operates high-throughput procurement, mechanical quality screening, and multimodal freight networks supplying non-coking steam coal, calibrated fines, manganese ore, and fluxing agents to integrated steel complexes and thermal plants across India, UAE, and Asian hubs.
              </p>
            </div>
          </FadeIn>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {minerals.map((m, idx) => (
              <FadeIn key={m.name} delay={idx * 0.1}>
                <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={m.image} 
                      alt={`${m.name} supplied by Harrsha Global India`} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      width={600}
                      height={350}
                    />
                    <div className="absolute top-4 left-4 bg-[#0B1530]/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {m.grade}
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-2">{m.name}</h2>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-5">{m.desc}</p>
                    
                    <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl mb-5 text-xs">
                      {m.specs.map((s) => (
                        <div key={s.label}>
                          <span className="text-slate-500 block text-[11px]">{s.label}</span>
                          <span className="font-bold text-slate-800">{s.value}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors uppercase tracking-wider"
                    >
                      Request Bulk Mineral Quote <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Value Prop & Supply Chain Section */}
          <div className="bg-[#0B1530] text-white rounded-3xl p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <Award className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">Third-Party Lab Assayed</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every mineral cargo shipped by Harrsha Global is certified with independent SGS or Mitra S.K. assay certificates for calorific value, moisture, ash, and chemical composition.
                </p>
              </div>
              <div>
                <ShieldCheck className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">Multimodal Logistics & Rakes</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Dedicated railway siding agreements and coastal vessel charters from Visakhapatnam, Krishnapatnam, and Paradip ports ensure guaranteed monthly dispatch reliability.
                </p>
              </div>
              <div>
                <CheckCircle2 className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">Flexible Long-Term Supply</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fixed-formula quarterly and annual procurement agreements offering price hedge insulation against spot market commodity volatility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
