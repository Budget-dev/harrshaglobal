import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../components/FadeIn';
import { Maximize2, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MineralProduct {
  name: string;
  grade: string;
  desc: string;
  uses: string[];
  specs: { label: string; value: string }[];
  image: string;
}

export function MinesMinerals() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedProduct, setSelectedProduct] = useState<MineralProduct | null>(null);

  const products: MineralProduct[] = [
    {
      name: "Calibrated Iron Ore Lumps",
      grade: "Fe 62% - 65% Pure Composition",
      desc: "Sourced directly from our high-yielding mining reserves in Ballari and Barbil. Characterized by unmatched thermal stability and low moisture ratios, making it the perfect direct reduction feed.",
      uses: ["DRI Sponge Iron Rotary Kilns", "Blast Furnace Loading Grids", "Direct Induction Melting"],
      specs: [
        { label: "Fe Core Content", value: "64.5% Basis" },
        { label: "Sizing Profile", value: "5mm - 18mm Calibrated" },
        { label: "Moisture Content", value: "< 2.0% Max" },
        { label: "Physical Strength", value: "High Shatter Index" }
      ],
      image: "https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.02%20PM.jpeg"
    },
    {
      name: "Premium Iron Ore Fines",
      grade: "Fe 61% - 63% Sinter Grade",
      desc: "High-grade mineral fines optimized for modern steel manufacturing sinter grids. Derived from our advanced mechanical dry screening plants with uniform granular consistency.",
      uses: ["Sintering Operations", "Pelletization Plants", "High-Load Industrial Feedstock"],
      specs: [
        { label: "Fe Core Content", value: "62.0% Basis" },
        { label: "Sizing Profile", value: "0mm - 10mm" },
        { label: "Silica Ratio", value: "3.5% Max" },
        { label: "Alumina Ratio", value: "2.2% Max" }
      ],
      image: "https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM.jpeg"
    },
    {
      name: "High-Calorific Steam Coal",
      grade: "Grade G3 - G7 Non-Coking",
      desc: "High-grade non-coking coal carefully categorized for heavy thermal power plants, cement rotary kilns, and sponge iron reduction processes.",
      uses: ["Sponge Iron Kiln Fuel", "Thermal Steam Generators", "Industrial Heavy Calciners"],
      specs: [
        { label: "Calorific Value", value: "5800 - 6400 Kcal/Kg" },
        { label: "Ash Content", value: "12% - 15% Maximum" },
        { label: "Volatile Matter", value: "28% - 32%" },
        { label: "Fixed Carbon", value: "48% - 55%" }
      ],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200"
    },
    {
      name: "Metallurgical Manganese Ore",
      grade: "Mn 38% - 46% Prime Grade",
      desc: "High-grade manganese ore essential for manufacturing premium silico-manganese and ferro-manganese alloys that boost structural steel yield strength.",
      uses: ["Ferroalloy Production", "Stainless Steel Manufacturing", "Chemical Grade Processing"],
      specs: [
        { label: "Manganese Content", value: "42.0% Basis" },
        { label: "Iron Content", value: "8% - 12% Max" },
        { label: "Silica Content", value: "7% - 9% Max" },
        { label: "Phosphorus Ratio", value: "< 0.08%" }
      ],
      image: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const galleryImages = [
    {
      url: "https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM.jpeg",
      title: "Heavy Excavation Grids",
      desc: "Precision loaders harvesting high-purity raw iron ore from active reserves in Ballari."
    },
    {
      url: "https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM%20(1).jpeg",
      title: "Advanced Sizing Plant",
      desc: "Modern dry screening equipment processing raw ore into calibrated lump and fine formats."
    },
    {
      url: "https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM%20(2).jpeg",
      title: "Shift Logistics Management",
      desc: "Heavy fleet transportation operating under zero-harm strict safety regulations."
    },
    {
      url: "https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.00%20PM.jpeg",
      title: "Bulk Loading Terminals",
      desc: "Automated loading stations transferring materials to high-capacity logistics lines."
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
              Mines & Mineral <br />
              Processing
            </h1>
            <p className="text-slate-500 text-sm md:text-base font-normal max-w-xl leading-relaxed pt-2">
              High-volume mineral excavation, mechanical dry screening, standardized lab grade certifications, and secure multimodal logistics.
            </p>
            <div className="w-16 h-[2px] bg-slate-900 mt-6 mx-auto md:mx-0" />
          </div>
        </FadeIn>

        {/* Clean, Full-Width High-Contrast Image */}
        <FadeIn delay={0.2} className="w-full">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
            <img 
              src="https://vennky.sirv.com/iron%20spongs/ballari/%23musuemofnaturalhistory.jpg" 
              alt="Harrsha Global Sustainable Mining Operations" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeIn>

        {/* Operational Matrix Section */}
        <FadeIn delay={0.3}>
          <div className="border-t border-slate-100 pt-12 grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                Resource Infrastructure
              </span>
              <h2 className="text-xl md:text-2xl font-black tracking-tight text-slate-950 uppercase leading-tight">
                Our Operational <br />
                Excellence Matrix
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Harrsha Global operates raw mining reserves in Ballari (Karnataka) and Barbil (Odisha), maintaining strong supply chain coordination to support core metallurgical manufacturing and continuous B2B delivery.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Scope of Sourcing / Key Capabilities */}
        <FadeIn delay={0.35}>
          <div className="border-t border-slate-100 pt-12 space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Operational Focus
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Precision Extraction", desc: "Eco-friendly geological planning combined with advanced crushing and dry screening loops." },
                { title: "Ecological Responsibility", desc: "Progressive mine area rehabilitation, zero-runoff sediment pits, and massive plantation zones." },
                { title: "Homogeneous Sizing", desc: "Ensuring stable particle size distribution with automated mechanical screen decks." },
                { title: "Multimodal Logistics", desc: "Direct coordinate links with major regional railways for efficient bulk freight transit." }
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-950 uppercase tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Products Portfolio Section */}
        <FadeIn delay={0.4}>
          <div className="border-t border-slate-100 pt-12 space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Mineral Portfolio
            </h3>
            
            <div className="space-y-12">
              {products.map((product, idx) => (
                <div key={idx} className="grid md:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-12 last:border-none last:pb-0">
                  <div className="md:col-span-4">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-100 bg-slate-50">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-8 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-400 font-mono tracking-widest block uppercase">
                        {product.grade}
                      </span>
                      <h4 className="text-lg font-bold text-slate-950 uppercase tracking-tight">
                        {product.name}
                      </h4>
                    </div>
                    
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {product.desc}
                    </p>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 hover:underline uppercase tracking-wider cursor-pointer"
                    >
                      Specifications Highlight →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Real scenes gallery displays directly matching 'more images please' */}
        <FadeIn delay={0.42}>
          <div className="border-t border-slate-100 pt-12 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Operations & Facility Gallery
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-100 bg-slate-50 shadow-sm"
                >
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                    <h5 className="text-white text-[10px] font-bold uppercase tracking-wider truncate">{img.title}</h5>
                    <p className="text-slate-300 text-[8px] truncate mt-0.5">{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* High-End Sourcing & Call to Action */}
        <FadeIn delay={0.45}>
          <div className="border-t border-slate-100 pt-12 pb-8">
            <div className="bg-slate-50 border border-slate-100 p-8 sm:p-12 rounded-2xl space-y-6 text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 block">
                B2B Sourcing Service
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 uppercase tracking-tight">
                Mineral Procurement & Logistics
              </h3>
              <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
                Coordinate high-volume raw material feedstocks with our mineral sourcing team. We establish dependable railway loading, container booking, and independent lab quality certificates.
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

      {/* Elegant specifications modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 bg-slate-100/90 hover:bg-slate-950 hover:text-white text-slate-800 p-2.5 rounded-full transition-colors cursor-pointer shadow-sm"
              >
                <X size={16} />
              </button>

              <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-[400px]">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 bg-slate-950 text-white rounded text-[9px] font-bold uppercase tracking-wider">
                    {selectedProduct.grade}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mt-2">
                    {selectedProduct.name}
                  </h3>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-8 overflow-y-auto flex flex-col justify-between">
                <div>
                  <h4 className="text-slate-950 text-xs font-black uppercase tracking-wider border-b border-slate-100 pb-2 mb-4">
                    Grade Specifications
                  </h4>
                  <div className="space-y-3 mb-6">
                    {selectedProduct.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between text-xs sm:text-sm font-normal">
                        <span className="text-slate-500 font-mono uppercase">{spec.label}</span>
                        <span className="text-slate-950 font-bold">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-slate-950 text-xs font-black uppercase tracking-wider border-b border-slate-100 pb-2 mb-4">
                    Typical Applications
                  </h4>
                  <ul className="space-y-2">
                    {selectedProduct.uses.map((use, i) => (
                      <li key={i} className="flex gap-2 text-slate-600 text-xs sm:text-sm font-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2" />
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-slate-400 tracking-widest font-mono">
                    HARRSHAGLOBAL MINERALS
                  </span>
                  <Link
                    to="/contact"
                    onClick={() => setSelectedProduct(null)}
                    className="px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white rounded-xl font-bold transition-all text-xs uppercase tracking-wider"
                  >
                    Submit Quotation
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
