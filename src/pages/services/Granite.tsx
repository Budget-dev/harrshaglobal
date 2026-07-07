import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../components/FadeIn';
import { ChevronLeft, ChevronRight, Maximize2, X, Gem, Hammer, Globe, Award, Sparkles, MapPin, CheckCircle, Flame, Grid, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GraniteVariety {
  id: string;
  name: string;
  origin: string;
  district: string;
  description: string;
  specs: { label: string; value: string }[];
  highlights: string[];
  images: {
    url: string;
    title: string;
    desc: string;
  }[];
}

export function Granite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const varieties: GraniteVariety[] = [
    {
      id: "black-galaxy",
      name: "Black Galaxy Premium Granite",
      origin: "Chimakurthi, Ongole",
      district: "Prakasam District, Andhra Pradesh, India",
      description: "World-renowned for its dark pitch-black background speckled with dazzling golden-bronze metallic flecks (brilliant pyroxenite crystals). This exceptional stone offers a luxurious, galaxy-like shimmering aesthetic, unrivaled compressive strength, and a high-mirror reflective finish, making it a masterpiece for architectural panels, vanity tops, and luxury lobbies.",
      highlights: [
        "Legendary gold fleck uniformity",
        "Direct quarry-to-port logistics",
        "Exceptional wear resistance",
        "Zero-absorption premium density"
      ],
      specs: [
        { label: "Compressive Strength", value: "190 - 220 MPa" },
        { label: "Water Absorption", value: "0.02% - 0.05%" },
        { label: "Density", value: "2.95 - 3.01 g/cm³" },
        { label: "Finish Quality", value: "95+ Gloss Units" }
      ],
      images: [
        {
          url: "https://vennky.sirv.com/granite/WhatsApp%20Image%202026-07-03%20at%207.09.47%20PM.jpeg",
          title: "Black Galaxy Slab Processing",
          desc: "Processing first-grade monolithic Black Galaxy blocks extracted from Chimakurthi, Ongole, Prakasam District."
        },
        {
          url: "https://vennky.sirv.com/granite/WhatsApp%20Image%202026-07-03%20at%207.09.48%20PM.jpeg",
          title: "Chimakurthi Quarry Operations",
          desc: "Ethically managed extraction of premium galaxy stone with golden metallic flecks in Ongole."
        },
        {
          url: "https://vennky.sirv.com/granite/WhatsApp%20Image%202026-07-03%20at%207.09.48%20PM%20(1).jpeg",
          title: "Slab Quality Inspection",
          desc: "Meticulous quality control checking the structural uniformity, density, and sheen of finished slabs."
        },
        {
          url: "https://vennky.sirv.com/granite/WhatsApp%20Image%202026-07-03%20at%207.09.49%20PM.jpeg",
          title: "Finished Premium Galaxy Slabs",
          desc: "Highly-polished finished Black Galaxy slabs prepared for high-end global architectural exports."
        }
      ]
    },
    {
      id: "sk-blue",
      name: "SK Blue Premium Granite",
      origin: "Tekkali",
      district: "Srikakulam District, Andhra Pradesh, India",
      description: "SK Blue is a magnificent granite featuring a captivating blue-grey background with elegant, wavy silver-white patterns and deep blue quartz minerals. Sourced directly from Tekkali, this premium granite variety adds a cooling, sophisticated editorial touch to both interior cladding and massive outdoor architectural projects. It is highly sought after across global markets for its superb weather durability and exotic aesthetic.",
      highlights: [
        "Stunning ice-blue / grey aesthetic",
        "Unique flowing mineral patterns",
        "High resistance to weathering",
        "Ideal for massive scale cladding"
      ],
      specs: [
        { label: "Compressive Strength", value: "185 - 210 MPa" },
        { label: "Water Absorption", value: "0.08% - 0.12%" },
        { label: "Density", value: "2.68 - 2.74 g/cm³" },
        { label: "Finish Quality", value: "90+ Gloss Units" }
      ],
      images: [
        {
          url: "https://vennky.sirv.com/granite/blue%20granite'/WhatsApp%20Image%202026-07-03%20at%207.12.45%20PM.jpeg",
          title: "SK Blue Raw Slabs",
          desc: "Premium grade SK Blue granite slabs showing pristine wavy silver-white mineral flows."
        },
        {
          url: "https://vennky.sirv.com/granite/blue%20granite'/WhatsApp%20Image%202026-07-03%20at%207.12.44%20PM%20(1).jpeg",
          title: "Tekkali Quarry Block Slicing",
          desc: "Slicing massive block reserves of SK Blue extracted from the mineral-rich hills of Srikakulam."
        },
        {
          url: "https://vennky.sirv.com/granite/blue%20granite'/WhatsApp%20Image%202026-07-03%20at%207.12.44%20PM.jpeg",
          title: "SK Blue Finishing Line",
          desc: "Advanced grinding and polishing lines showcasing the rich crystalline layers of the stone."
        },
        {
          url: "https://vennky.sirv.com/granite/blue%20granite'/WhatsApp%20Image%202026-07-03%20at%207.12.43%20PM.jpeg",
          title: "Mirror-Polished SK Blue",
          desc: "Premium SK Blue slabs ready for international architectural fittings and luxury projects."
        },
        {
          url: "https://vennky.sirv.com/granite/blue%20granite'/WhatsApp%20Image%202026-07-03%20at%207.12.45%20PM%20(1).jpeg",
          title: "Finished Slabs Awaiting Export",
          desc: "Polished and sorted containerized SK Blue blocks lined up for global seaport transit."
        }
      ]
    }
  ];

  // Independent active indexes for each gallery
  const [galaxyIdx, setGalaxyIdx] = useState(0);
  const [blueIdx, setBlueIdx] = useState(0);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxVariety, setLightboxVariety] = useState<"black-galaxy" | "sk-blue">("black-galaxy");
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (varietyId: "black-galaxy" | "sk-blue", index: number) => {
    setLightboxVariety(varietyId);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const getActiveIndex = (varietyId: string) => {
    return varietyId === "black-galaxy" ? galaxyIdx : blueIdx;
  };

  const setActiveIndex = (varietyId: string, value: number) => {
    if (varietyId === "black-galaxy") {
      setGalaxyIdx(value);
    } else {
      setBlueIdx(value);
    }
  };

  const nextImage = (variety: GraniteVariety) => {
    const current = getActiveIndex(variety.id);
    const next = (current + 1) % variety.images.length;
    setActiveIndex(variety.id, next);
  };

  const prevImage = (variety: GraniteVariety) => {
    const current = getActiveIndex(variety.id);
    const prev = (current - 1 + variety.images.length) % variety.images.length;
    setActiveIndex(variety.id, prev);
  };

  const currentLightboxVariety = varieties.find(v => v.id === lightboxVariety) || varieties[0];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Page Main Header */}
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles size={14} /> Elite Quarry Selection
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a202c] mb-6 tracking-tight leading-none">
              Premium Natural Granite
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light">
              Harrsha Global is an industry-leading explorer and exporter of high-yield Indian natural stones. We proudly own, process, and export legendary granite varieties directly to over 20 countries under global construction certifications.
            </p>
          </div>
        </FadeIn>

        {/* Variety Showcase Container */}
        <div className="space-y-32">
          {varieties.map((variety, vIdx) => {
            const activeIdx = getActiveIndex(variety.id);
            const isEven = vIdx % 2 === 0;

            return (
              <div 
                key={variety.id} 
                id={variety.id}
                className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Image Gallery Column */}
                <div className={`lg:col-span-7 space-y-4 ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-xl group">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeIdx}
                        src={variety.images[activeIdx].url}
                        alt={variety.images[activeIdx].title}
                        initial={{ opacity: 0, scale: 1.01 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.99 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover cursor-zoom-in"
                        onClick={() => openLightbox(variety.id as any, activeIdx)}
                      />
                    </AnimatePresence>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                    {/* Navigation Buttons */}
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage(variety); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer z-10"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage(variety); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer z-10"
                    >
                      <ChevronRight size={22} />
                    </button>

                    {/* Expand overlay button */}
                    <button
                      onClick={() => openLightbox(variety.id as any, activeIdx)}
                      className="absolute top-4 right-4 bg-black/60 hover:bg-primary backdrop-blur-sm text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-md cursor-pointer z-10"
                      title="Enlarge Image"
                    >
                      <Maximize2 size={18} />
                    </button>

                    {/* Meta details overlay */}
                    <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none z-10">
                      <span className="text-xs bg-primary text-white px-3 py-1 rounded-full font-semibold tracking-wider mb-2 inline-block">
                        {variety.images[activeIdx].title}
                      </span>
                      <p className="text-sm text-white/90 font-light">
                        {variety.images[activeIdx].desc}
                      </p>
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="grid grid-cols-5 gap-2 md:gap-3">
                    {variety.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(variety.id, idx)}
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

                {/* Text Content Column */}
                <div className={`lg:col-span-5 space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary tracking-wide uppercase">
                      <MapPin size={16} />
                      <span>{variety.origin}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                      {variety.name}
                    </h2>
                    <p className="text-xs text-gray-400 font-mono tracking-wider">
                      Origin: {variety.district}
                    </p>
                  </div>

                  <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light">
                    {variety.description}
                  </p>

                  {/* Technical Specs Cards */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {variety.specs.map((spec, sIdx) => (
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

                  {/* Quick Highlight Checklist */}
                  <div className="pt-4 space-y-3">
                    {variety.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2.5">
                        <CheckCircle size={18} className="text-emerald-500 shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center bg-gray-900 hover:bg-primary text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg text-sm"
                    >
                      Request Quotation for {variety.origin.split(',')[0]}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Process and Sourcing Excellence */}
        <div className="mt-32 pt-20 border-t border-gray-100">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Unrivaled Quality Assurance
            </h2>
            <p className="text-gray-500 text-lg font-light">
              From Chimakurthi's shimmering galaxy to Tekkali's ice-blue blocks, our rigorous processing pipeline delivers structural brilliance and spectacular reflective depth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Gem,
                title: "Exquisite Selection",
                desc: "Handpicked premium-grade monolithic blocks selected by veteran geologists for color saturation and crystalline consistency."
              },
              {
                icon: Hammer,
                title: "Precision Slicing",
                desc: "Using industry-grade Italian multi-blade gang saws and high-tension wire saws to guarantee perfectly uniform thickness and flatness."
              },
              {
                icon: Award,
                title: "Mirror-Gloss Resin Polish",
                desc: "Processed in state-of-the-art automated multi-head epoxy lines to seal microscopic pores and yield a long-lasting, deep lustrous shine."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic CTA */}
        <div className="mt-32 relative rounded-3xl overflow-hidden bg-gray-900 p-12 lg:p-20 text-center">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://vennky.sirv.com/granite/WhatsApp%20Image%202026-07-03%20at%207.09.49%20PM.jpeg" 
              alt="Granite Texture Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Partner with Harrsha Global
            </h2>
            <p className="text-white/80 text-lg leading-relaxed font-light">
              Whether you need customized bulk containers of premium <strong>Black Galaxy</strong> blocks from Chimakurthi, or elegant <strong>SK Blue</strong> slabs from Tekkali, our logistical teams handle global delivery right to your docks.
            </p>
            <div className="pt-4">
              <Link to="/contact" className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold transition-all hover:scale-105 rounded-full inline-flex items-center gap-2 shadow-xl">
                Get Bulk Custom Quotation
              </Link>
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
                  src={currentLightboxVariety.images[lightboxIndex].url}
                  alt={currentLightboxVariety.images[lightboxIndex].title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Description Block */}
              <div className="text-center mt-6 text-white max-w-2xl px-4 space-y-2">
                <h3 className="text-xl font-bold text-white">
                  {currentLightboxVariety.images[lightboxIndex].title}
                </h3>
                <p className="text-sm text-white/75 font-light">
                  {currentLightboxVariety.images[lightboxIndex].desc}
                </p>

                {/* Dot Pagination inside Lightbox */}
                <div className="flex justify-center gap-2.5 pt-4">
                  {currentLightboxVariety.images.map((_, idx) => (
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
