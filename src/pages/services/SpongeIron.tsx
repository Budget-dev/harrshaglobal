import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../components/FadeIn';
import { Maximize2, X, MapPin } from 'lucide-react';
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

  const [activeImage, setActiveImage] = useState<{ url: string; title: string; desc: string } | null>(null);

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

  const contactNumbers = ["+91 94817 56999", "+91 94413 53791", "+91 73867 34389"];

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
              Sponge Iron & <br />
              Ore Mining
            </h1>
            <p className="text-slate-500 text-sm md:text-base font-normal max-w-xl leading-relaxed pt-2">
              Advanced high-efficiency Direct Reduced Iron (DRI) processing at our Visakhapatnam steel plant paired with high-grade Fe iron ore operations.
            </p>
            <div className="w-16 h-[2px] bg-slate-900 mt-6 mx-auto md:mx-0" />
          </div>
        </FadeIn>

        {/* Clean, Full-Width High-Contrast Image */}
        <FadeIn delay={0.2} className="w-full">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
            <img 
              src="https://vennky.sirv.com/iron%20spongs/WhatsApp%20Image%202026-07-03%20at%207.13.59%20PM.jpeg" 
              alt="Harrsha Global Sponge Iron & Mining Infrastructure" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeIn>

        {/* Dynamic Industrial Divisions */}
        {sectors.map((sector, idx) => (
          <div key={sector.id} className="border-t border-slate-100 pt-16 space-y-10">
            
            {/* Header of Sector */}
            <FadeIn delay={0.15}>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block flex items-center gap-1.5">
                    <MapPin size={12} /> {sector.origin}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">
                    {sector.name}
                  </h2>
                </div>
                <div className="text-xs text-slate-400 font-mono tracking-wider">
                  Location: {sector.locationDetails}
                </div>
              </div>
            </FadeIn>

            {/* Description & Technical Specs Grid */}
            <FadeIn delay={0.2}>
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-7 space-y-6">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {sector.description}
                  </p>
                  
                  {/* Bullet Highlights */}
                  <ul className="space-y-3 pt-2 text-slate-600 text-sm">
                    {sector.highlights.map((hl, hIdx) => (
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
                    Tested Industrial Specs
                  </span>
                  <div className="space-y-3">
                    {sector.specs.map((spec, sIdx) => (
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
                  Industrial Processing Gallery (Click to Enlarge)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {sector.images.map((img, imgIdx) => (
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

        {/* Global Logistics and Supply Desk Section */}
        <FadeIn delay={0.35}>
          <div className="border-t border-slate-100 pt-16">
            <div className="bg-slate-50 border border-slate-100 p-8 sm:p-12 rounded-2xl grid md:grid-cols-12 gap-8 items-start">
              
              <div className="md:col-span-7 space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 block">
                  Corporate Supply Pipeline
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 uppercase tracking-tight leading-none">
                  Establish Your Supply Pipeline Today
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Connect directly with our plant administrators and mineral logistics divisions in Anakapalli, Ballari, and Barbil. We coordinate swift rail-siding and seaport freight transit.
                </p>
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-xl text-xs sm:text-sm uppercase tracking-widest shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Submit Supply Inquiry Form
                  </Link>
                </div>
              </div>

              <div className="md:col-span-5 bg-white border border-slate-100 p-6 rounded-xl space-y-4 shadow-sm">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block border-b border-slate-100 pb-2">
                  Direct Procurement desk
                </span>
                <div className="space-y-3 text-xs text-slate-600 font-mono">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Contact Phones</span>
                    {contactNumbers.map((num, idx) => (
                      <p key={idx} className="text-slate-900 font-bold mt-0.5">{num}</p>
                    ))}
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Email Address</span>
                    <a href="mailto:Info@harrshaglobal.com" className="text-slate-900 font-bold hover:underline">
                      Info@harrshaglobal.com
                    </a>
                  </div>
                </div>
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
                <div className="w-full md:w-2/3 bg-slate-100 aspect-[4/3] md:aspect-auto md:min-h-[400px] relative">
                  <img 
                    src={activeImage.url} 
                    alt={activeImage.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="w-full md:w-1/3 p-8 flex flex-col justify-between bg-white">
                  <div className="space-y-4">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">
                      Harrsha Global Metallurgy
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
                      SECURED SUPPLY
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
