import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../components/FadeIn';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  CheckCircle, 
  Sparkles, 
  MapPin, 
  Flame, 
  Activity, 
  Settings, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Globe,
  Award,
  Layers,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface IronIndustrySector {
  id: string;
  name: string;
  origin: string;
  locationDetails: string;
  description: string;
  specs: { label: string; value: string }[];
  highlights: string[];
  images: {
    url: string;
    title: string;
    desc: string;
  }[];
}

export function SpongeIron() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectors: IronIndustrySector[] = [
    {
      id: "mini-steel-plant",
      name: "Sponge Iron Mini Steel Plant",
      origin: "Tallapalem, Anakapalli",
      locationDetails: "Visakhapatnam District, Andhra Pradesh, India",
      description: "Harrshaglobal Pvt Ltd operates a state-of-the-art mini steel plant specializing in premium-grade Sponge Iron (Direct Reduced Iron). Utilizing high-end DRI rotary kiln technology and high-purity iron ore, we manufacture high-grade sponge iron with exceptional metallization rates and low sulfur-phosphorus ratios. Strategically positioned at Tallapalem, our plant feeds massive integrated steel melting shops and casting foundries nationwide.",
      specs: [
        { label: "Annual Output Capacity", value: "100,000 MT per year" },
        { label: "Refining Technology", value: "Direct Reduction Iron (DRI)" },
        { label: "Primary Kiln Fuel", value: "Premium Non-Coking Coal" },
        { label: "Standardization", value: "Strict 4501 Quality Compliant" }
      ],
      highlights: [
        "Unrivaled high metallization rate",
        "Optimized raw material thermal handling",
        "High mechanical strength & structural stability",
        "Strict environment-friendly waste heat recovery systems"
      ],
      images: [
        {
          url: "https://vennky.sirv.com/iron%20spongs/WhatsApp%20Image%202026-07-03%20at%207.13.59%20PM.jpeg",
          title: "Sponge Iron Rotary Kiln",
          desc: "Our heavy-duty, high-temperature rotary kiln utilizing Direct Reduced Iron (DRI) thermal reduction technologies."
        },
        {
          url: "https://vennky.sirv.com/iron%20spongs/WhatsApp%20Image%202026-07-03%20at%207.14.00%20PM%20(1).jpeg",
          title: "Mini Steel Plant Infrastructure",
          desc: "Automated processing grid showcasing structural integration, raw sorting bunkers, and high-purity sponge yields."
        }
      ]
    },
    {
      id: "iron-ore-mining",
      name: "Iron Ore Mining Operations",
      origin: "Ballari & Barbil",
      locationDetails: "Karnataka State & Barbil, Odisha State, India",
      description: "Harrsha Global conducts high-yield iron ore exploration, extraction, and processing across India's premier mineral-rich zones. Sourced directly from our strategic mines in Ballari (Karnataka) and Barbil (Odisha), our iron ore is characterized by exceptional Fe grade content, thermal stability, and low moisture, serving as premium-grade feedstock for direct reduction plants, steel melting shops, and integrated global blast furnaces.",
      specs: [
        { label: "Ore Fe Grade", value: "62% - 65% Pure Fe Composition" },
        { label: "Output Formats", value: "Calibrated Lumps (5-18mm) & Fines" },
        { label: "Operations Scale", value: "Excavation, Crushing & Screening" },
        { label: "Reserves Range", value: "High-Fe Blue Dust & Monolithic Ore" }
      ],
      highlights: [
        "Strategic mining grids in Ballari and Barbil",
        "Advanced dry screening and mobile crushing lines",
        "Optimized logistics with proximity to rail sidings",
        "Rigorous ecological compliance & green belt safety"
      ],
      images: [
        {
          url: "https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM.jpeg",
          title: "Heavy Excavation Mining Grids",
          desc: "Precision heavy machinery harvesting high-grade raw iron ore veins from our reserves in Ballari."
        },
        {
          url: "https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM%20(1).jpeg",
          title: "Sizing & Screening Plant Line",
          desc: "Advanced processing facility sorting raw ore into calibrated lumps and industrial fines formats."
        },
        {
          url: "https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM%20(2).jpeg",
          title: "Mining Shift Logistics",
          desc: "Heavy-duty excavators and haulage fleet operating on systematic mining grids under strict safety parameters."
        },
        {
          url: "https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.02%20PM.jpeg",
          title: "Calibrated Ore Sizing & Stockpiling",
          desc: "Processed high-Fe calibrated lumps stacked and verified for chemical homogeneity."
        },
        {
          url: "https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.00%20PM.jpeg",
          title: "Bulk Transit Loading Terminals",
          desc: "Automated loading bays transferring processed ore to high-capacity logistics networks for seaport dispatch."
        }
      ]
    }
  ];

  // Independent active image indexes for both sectors
  const [plantIdx, setPlantIdx] = useState(0);
  const [miningIdx, setMiningIdx] = useState(0);

  // Lightbox Modal States
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSector, setLightboxSector] = useState<"mini-steel-plant" | "iron-ore-mining">("mini-steel-plant");
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const getActiveIndex = (sectorId: string) => {
    return sectorId === "mini-steel-plant" ? plantIdx : miningIdx;
  };

  const setActiveIndex = (sectorId: string, value: number) => {
    if (sectorId === "mini-steel-plant") {
      setPlantIdx(value);
    } else {
      setMiningIdx(value);
    }
  };

  const nextImage = (sector: IronIndustrySector) => {
    const current = getActiveIndex(sector.id);
    const next = (current + 1) % sector.images.length;
    setActiveIndex(sector.id, next);
  };

  const prevImage = (sector: IronIndustrySector) => {
    const current = getActiveIndex(sector.id);
    const prev = (current - 1 + sector.images.length) % sector.images.length;
    setActiveIndex(sector.id, prev);
  };

  const openLightbox = (sectorId: "mini-steel-plant" | "iron-ore-mining", index: number) => {
    setLightboxSector(sectorId);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const currentLightboxSector = sectors.find(s => s.id === lightboxSector) || sectors[0];
  const contactNumbers = ["+91 94817 56999", "+91 94413 53791", "+91 73867 34389"];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Hero Header */}
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Flame size={14} className="animate-pulse text-primary" /> Metallurgical & Mining Division
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a202c] mb-6 tracking-tight leading-none">
              Sponge Iron & Iron Ore Mining
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light">
              Harrsha Global excels in heavy industrial sector exploration, delivering high-purity Direct Reduced Iron (DRI) sponge from our Visakhapatnam plant alongside raw high-grade Fe Iron Ore mined from the legendary deposits of Ballari & Barbil.
            </p>
          </div>
        </FadeIn>

        {/* Sectors Interactive Showcase */}
        <div className="space-y-32">
          {sectors.map((sector, sIdx) => {
            const activeIdx = getActiveIndex(sector.id);
            const isEven = sIdx % 2 === 0;

            return (
              <div 
                key={sector.id} 
                id={sector.id}
                className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Left Side: Photo Slider / Gallery */}
                <div className={`lg:col-span-7 space-y-4 ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-xl group">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeIdx}
                        src={sector.images[activeIdx].url}
                        alt={sector.images[activeIdx].title}
                        initial={{ opacity: 0, scale: 1.01 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.99 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover cursor-zoom-in"
                        onClick={() => openLightbox(sector.id as any, activeIdx)}
                      />
                    </AnimatePresence>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                    {/* Navigation Arrows */}
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage(sector); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer z-10"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage(sector); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer z-10"
                    >
                      <ChevronRight size={22} />
                    </button>

                    {/* Expand overlay button */}
                    <button
                      onClick={() => openLightbox(sector.id as any, activeIdx)}
                      className="absolute top-4 right-4 bg-black/60 hover:bg-primary backdrop-blur-sm text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-md cursor-pointer z-10"
                      title="Enlarge Industrial Image"
                    >
                      <Maximize2 size={18} />
                    </button>

                    {/* Metadata Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none z-10">
                      <span className="text-xs bg-primary text-white px-3 py-1 rounded-full font-semibold tracking-wider mb-2 inline-block">
                        {sector.images[activeIdx].title}
                      </span>
                      <p className="text-sm text-white/90 font-light">
                        {sector.images[activeIdx].desc}
                      </p>
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className={`grid gap-2 md:gap-3`} style={{ gridTemplateColumns: `repeat(${sector.images.length}, minmax(0, 1fr))` }}>
                    {sector.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(sector.id, idx)}
                        className={`relative aspect-[4/3] rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                          activeIdx === idx
                            ? 'border-primary ring-4 ring-primary/20 scale-[0.98]'
                            : 'border-transparent opacity-60 hover:opacity-100 hover:scale-[1.02]'
                        }`}
                      >
                        <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Side: Information & Technical Specifications */}
                <div className={`lg:col-span-5 space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary tracking-wide uppercase">
                      <MapPin size={16} />
                      <span>{sector.origin}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                      {sector.name}
                    </h2>
                    <p className="text-xs text-gray-400 font-mono tracking-wider">
                      Location: {sector.locationDetails}
                    </p>
                  </div>

                  <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light">
                    {sector.description}
                  </p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {sector.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <span className="text-xs text-gray-400 font-semibold uppercase block mb-1">
                          {spec.label}
                        </span>
                        <span className="text-sm md:text-base font-bold text-gray-800">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights Checklist */}
                  <div className="pt-4 space-y-3">
                    {sector.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2.5">
                        <CheckCircle size={18} className="text-emerald-500 shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Action contact */}
                  <div className="pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center bg-gray-900 hover:bg-primary text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg text-sm"
                    >
                      Inquire About {sector.id === "mini-steel-plant" ? "Sponge Iron" : "Iron Ore Reserves"}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality, Machinery and Environmental Commitment */}
        <div className="mt-32 pt-20 border-t border-gray-100">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Industrial Engineering Excellence
            </h2>
            <p className="text-gray-500 text-lg font-light">
              Harrsha Global implements advanced high-efficiency mineral sorting and thermal reduction processes across all mines and plants.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "Advanced DRI Refining",
                desc: "Harnessing highly optimized thermal-reduction processes to synthesize heavy sponge iron with high-purity yield and superb physical structure."
              },
              {
                icon: Settings,
                title: "Mobile Crushing & Dry Screening",
                desc: "Using modern high-performance screen decks and crushing equipment in Ballari and Barbil mines to separate calibrated lump sizes."
              },
              {
                icon: ShieldCheck,
                title: "Quality & Compliance Assurance",
                desc: "Comprehensive laboratories checking moisture content, Fe chemical grade homogeneity, mechanical loading rates, and regulatory green compliance."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all flex flex-col">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Logistics and Supply Desk Section */}
        <div className="mt-32 bg-zinc-950 text-white rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-zinc-800/20 blur-3xl" />
          <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-orange-500/5 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Col Contact Text */}
            <div className="space-y-6">
              <span className="text-xs bg-zinc-800 text-zinc-300 px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider border border-zinc-700">
                Industrial Supplies Desk
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Establish Your Supply Pipeline Today
              </h2>
              <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">
                Connect directly with our plant administrators and mineral logistics divisions in Anakapalli, Ballari, and Barbil. We coordinate swift rail-siding and seaport freight transit.
              </p>

              {/* Office Location Detail */}
              <div className="flex items-start gap-3 bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800">
                <MapPin className="text-orange-500 shrink-0 mt-1" size={20} />
                <div className="text-sm">
                  <p className="font-bold text-zinc-100">Visakhapatnam Steel Division Location</p>
                  <p className="text-zinc-400 font-light mt-0.5">
                    Tallapalem, Undhandapuram, Anakapalli, Visakhapatnam District, Andhra Pradesh, India.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Col Action Contact Info */}
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 space-y-6">
              <h3 className="text-xl font-bold text-zinc-100 border-b border-zinc-800 pb-4">
                Corporate Logistics & Desk
              </h3>
              
              <div className="space-y-4">
                
                {/* Phones */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-zinc-400" size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 block uppercase font-semibold">Direct Desk Contacts</span>
                    <div className="text-sm text-zinc-200 font-semibold space-y-1 mt-1">
                      {contactNumbers.map((num, nI) => (
                        <p key={nI}>{num}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-zinc-400" size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 block uppercase font-semibold">Procurement Email</span>
                    <a 
                      href="mailto:Info@harrshaglobal.com" 
                      className="text-sm text-zinc-200 font-semibold hover:text-white transition-colors mt-1 block"
                    >
                      Info@harrshaglobal.com
                    </a>
                  </div>
                </div>

                {/* Web */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center shrink-0">
                    <Globe className="text-zinc-400" size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 block uppercase font-semibold">Official Domain</span>
                    <a 
                      href="https://www.harrshaglobal.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-zinc-200 font-semibold hover:text-white transition-colors mt-1 block"
                    >
                      www.harrshaglobal.com
                    </a>
                  </div>
                </div>

              </div>

              {/* Direct Inquiry button */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="w-full bg-white hover:bg-zinc-200 text-zinc-950 py-3.5 rounded-full font-bold transition-all text-center text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  Submit Supply Inquiry Form
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxOpen(false)}
              className="fixed inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center z-50"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 bg-white/15 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={24} />
              </button>

              {/* Main Image View */}
              <div className="relative w-full aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden bg-gray-900 border border-white/10 shadow-2xl">
                <img
                  src={currentLightboxSector.images[lightboxIndex].url}
                  alt={currentLightboxSector.images[lightboxIndex].title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Description Block */}
              <div className="text-center mt-6 text-white max-w-2xl px-4 space-y-2">
                <h3 className="text-xl font-bold text-white">
                  {currentLightboxSector.images[lightboxIndex].title}
                </h3>
                <p className="text-sm text-white/75 font-light">
                  {currentLightboxSector.images[lightboxIndex].desc}
                </p>

                {/* Dot Pagination inside Lightbox */}
                <div className="flex justify-center gap-2.5 pt-4">
                  {currentLightboxSector.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightboxIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                        lightboxIndex === idx ? 'bg-primary w-6' : 'bg-white/30 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
