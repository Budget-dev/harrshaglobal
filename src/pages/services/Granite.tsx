import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../components/FadeIn';
import { 
  ArrowRight, 
  X, 
  MapPin, 
  Maximize2, 
  ShieldCheck, 
  Award, 
  Layers, 
  Gem, 
  Workflow
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GraniteVariety {
  id: string;
  name: string;
  origin: string;
  district: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
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

  const [activeImage, setActiveImage] = useState<{ url: string; title: string; desc: string } | null>(null);

  const varieties: GraniteVariety[] = [
    {
      id: "black-galaxy",
      name: "Black Galaxy Premium Granite",
      origin: "Chimakurthi, Ongole",
      district: "Prakasam District, Andhra Pradesh, India",
      description: "World-renowned for its dark pitch-black background speckled with dazzling golden-bronze metallic flecks (brilliant pyroxenite crystals). Sourced directly from Chimakurthi, this legendary variety offers a high-mirror reflective finish, unmatched density, and permanent weather-resistance. A timeless choice for luxury lobbies, facades, and premium countertops.",
      highlights: [
        "Legendary golden fleck distribution and uniformity",
        "Direct quarry-to-port supply line coordination",
        "Extreme compressive strength and high scratch resistance",
        "Zero-porosity surface ensuring pristine stain protection"
      ],
      specs: [
        { label: "Compressive Strength", value: "190 - 220 MPa" },
        { label: "Water Absorption", value: "0.02% - 0.05%" },
        { label: "Density", value: "2.95 - 3.01 g/cm³" },
        { label: "Polish Gloss Sheen", value: "95+ Gloss Units" }
      ],
      images: [
        {
          url: "https://vennky.sirv.com/granite/WhatsApp%20Image%202026-07-03%20at%207.09.47%20PM.jpeg",
          title: "Black Galaxy Processing",
          desc: "First-grade monolithic Black Galaxy blocks cut at our processing plants."
        },
        {
          url: "https://vennky.sirv.com/granite/WhatsApp%20Image%202026-07-03%20at%207.09.48%20PM.jpeg",
          title: "Chimakurthi Quarry Extraction",
          desc: "Heavy machinery and wire saws cutting deep premium stone benches."
        },
        {
          url: "https://vennky.sirv.com/granite/WhatsApp%20Image%202026-07-03%20at%207.09.48%20PM%20(1).jpeg",
          title: "Pristine Finished Slab Stack",
          desc: "Mirror-finished premium slabs after the final multi-stage abrasive polishing run."
        },
        {
          url: "https://vennky.sirv.com/granite/WhatsApp%20Image%202026-07-03%20at%207.09.49%20PM.jpeg",
          title: "Galaxy Slabs Awaiting Transit",
          desc: "Crated and certified premium galaxy slabs prepared for international seaport dispatch."
        }
      ]
    },
    {
      id: "sk-blue",
      name: "SK Blue Premium Granite",
      origin: "Tekkali",
      district: "Srikakulam District, Andhra Pradesh, India",
      description: "A magnificent structural granite featuring a cool ice-grey background patterned with flowing, wave-like silver ribbons and deep azure quartz clusters. Sourced from the mineral reserves of Tekkali, SK Blue blends heavy industrial durability with an exotic premium aesthetic. It is highly sought after across global markets for large-scale external cladding and architectural installations.",
      highlights: [
        "Dynamic silver-white flowing waves with deep-blue crystalline nodes",
        "Remarkable thermal tolerance and climate durability",
        "Highly uniform color distribution ideal for massive facades",
        "Finely calibrated slabs processed using state-of-the-art saws"
      ],
      specs: [
        { label: "Compressive Strength", value: "185 - 210 MPa" },
        { label: "Water Absorption", value: "0.08% - 0.12%" },
        { label: "Density", value: "2.68 - 2.74 g/cm³" },
        { label: "Polish Gloss Sheen", value: "90+ Gloss Units" }
      ],
      images: [
        {
          url: "https://vennky.sirv.com/granite/blue%20granite'/WhatsApp%20Image%202026-07-03%20at%207.12.45%20PM.jpeg",
          title: "SK Blue Raw Slabs",
          desc: "Calibrated SK Blue slabs showing distinctive horizontal mineral flow lines."
        },
        {
          url: "https://vennky.sirv.com/granite/blue%20granite'/WhatsApp%20Image%202026-07-03%20at%207.12.44%20PM%20(1).jpeg",
          title: "Block Slicing Stage",
          desc: "Monolithic blocks processed using high-precision multi-blade gang saws."
        },
        {
          url: "https://vennky.sirv.com/granite/blue%20granite'/WhatsApp%20Image%202026-07-03%20at%207.12.44%20PM.jpeg",
          title: "Abrasive Polishing Line",
          desc: "Automated line applying high-grit polishing stones to achieve a flawless finish."
        },
        {
          url: "https://vennky.sirv.com/granite/blue%20granite'/WhatsApp%20Image%202026-07-03%20at%207.12.43%20PM.jpeg",
          title: "Prismatic Quality Inspection",
          desc: "Thorough inspection of finished surfaces under specialized high-contrast lighting."
        },
        {
          url: "https://vennky.sirv.com/granite/blue%20granite'/WhatsApp%20Image%202026-07-03%20at%207.12.45%20PM%20(1).jpeg",
          title: "Ready for Container Shipment",
          desc: "Carefully bundled structural wood frames packing polished slabs securely for sea travel."
        }
      ]
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen selection:bg-slate-950 selection:text-white pt-28 pb-20 px-6 md:px-12">
      <div className="w-full max-w-4xl mx-auto space-y-16">
        
        {/* Simple, Bold, Elegant Editorial Statement */}
        <FadeIn delay={0.1}>
          <div className="space-y-4 text-center md:text-left">
            <p className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">
              Harrsha Global
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 uppercase leading-none">
              Premium Natural <br />
              Granite Sourcing
            </h1>
            <p className="text-slate-500 text-sm md:text-base font-normal max-w-xl leading-relaxed pt-2">
              Quarry-direct procurement, advanced gang saw block cutting, mirror-resin polishing, and certified international export shipping.
            </p>
            <div className="w-16 h-[2px] bg-slate-900 mt-6 mx-auto md:mx-0" />
          </div>
        </FadeIn>

        {/* Global Slabs and Quarries Presentation */}
        {varieties.map((variety, idx) => (
          <div key={variety.id} className="border-t border-slate-100 pt-16 space-y-10">
            
            {/* Header of Variety */}
            <FadeIn delay={0.15}>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block flex items-center gap-1.5">
                    <MapPin size={12} /> {variety.origin}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">
                    {variety.name}
                  </h2>
                </div>
                <div className="text-xs text-slate-400 font-mono tracking-wider">
                  District: {variety.district}
                </div>
              </div>
            </FadeIn>

            {/* Description & Technical Specs Grid */}
            <FadeIn delay={0.2}>
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-7 space-y-6">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {variety.description}
                  </p>
                  
                  {/* Bullet Highlights */}
                  <ul className="space-y-3 pt-2 text-slate-600 text-sm">
                    {variety.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex gap-2.5 text-slate-600 text-xs sm:text-sm font-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tech Specs Block */}
                <div className="md:col-span-5 bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block border-b border-slate-200 pb-2">
                    Tested Material Specs
                  </span>
                  <div className="space-y-3">
                    {variety.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex justify-between text-xs font-normal">
                        <span className="text-slate-500 uppercase font-mono">{spec.label}</span>
                        <span className="text-slate-950 font-bold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Images Grid Showcase - Direct display matching 'more images please' */}
            <FadeIn delay={0.25}>
              <div className="space-y-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
                  Slab & Processing Gallery (Click to Enlarge)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {variety.images.map((img, imgIdx) => (
                    <div 
                      key={imgIdx}
                      onClick={() => setActiveImage(img)}
                      className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-100 bg-slate-50 cursor-zoom-in shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
                    >
                      <img 
                        src={img.url} 
                        alt={img.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Maximize2 size={16} className="text-white drop-shadow" />
                      </div>
                      
                      {/* Micro info on bottom */}
                      <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[9px] font-bold text-slate-800 uppercase tracking-tight truncate border border-slate-100">
                        {img.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

          </div>
        ))}

        {/* Processing Phases & Quality Standards */}
        <FadeIn delay={0.35}>
          <div className="border-t border-slate-100 pt-16 space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Quarry to Destination Process
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "01", phase: "Block Selection", desc: "Monolithic blocks selected by veteran geologists to ensure perfect consistency, structural soundness, and ideal crystalline structures." },
                { num: "02", phase: "Gang Saw Calibration", desc: "Using high-speed Italian multi-blade gang saws and diamond wire setups to slice blocks into clean, flat, uniformly calibrated slabs." },
                { num: "03", phase: "High-Gloss Finish", desc: "Automated multi-head polishing lines sealed with premium resin to resist environmental elements and achieve maximum gloss sheen." }
              ].map((phase, idx) => (
                <div key={idx} className="space-y-3 relative group">
                  <div className="text-3xl font-black text-slate-200 group-hover:text-slate-400 transition-colors duration-300 font-mono">
                    {phase.num}
                  </div>
                  <h4 className="text-sm font-bold text-slate-950 uppercase tracking-tight">
                    {phase.phase}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Bulk Sourcing Inquiry Section */}
        <FadeIn delay={0.4}>
          <div className="border-t border-slate-100 pt-16 pb-8">
            <div className="bg-slate-50 border border-slate-100 p-8 sm:p-12 rounded-2xl space-y-6 text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 block">
                Bulk Quotation Service
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 uppercase tracking-tight">
                Architectural Granite Supply
              </h3>
              <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
                Connect with our minerals and stone export division to discuss raw blocks, dimensional calibrated slabs, container logistics, custom polishing grits, and bulk container bookings.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-xl text-xs sm:text-sm uppercase tracking-widest shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Sourcing Inquiry
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <button 
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-20 bg-slate-100/90 hover:bg-slate-950 hover:text-white text-slate-800 p-2.5 rounded-full transition-all duration-300 cursor-pointer shadow"
                aria-label="Close image detail"
              >
                <X size={16} />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Image side */}
                <div className="w-full md:w-2/3 bg-slate-100 aspect-[4/3] md:aspect-auto md:min-h-[400px] relative">
                  <img 
                    src={activeImage.url} 
                    alt={activeImage.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Text side */}
                <div className="w-full md:w-1/3 p-8 flex flex-col justify-between bg-white">
                  <div className="space-y-4">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">
                      Harrsha Global Minerals
                    </span>
                    <h4 className="text-lg font-black text-slate-950 uppercase tracking-tight">
                      {activeImage.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {activeImage.desc}
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[9px] font-bold text-slate-400 tracking-widest font-mono">
                      SECURED EXPORT
                    </span>
                    <button 
                      onClick={() => setActiveImage(null)}
                      className="text-xs font-bold text-slate-950 hover:underline"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
