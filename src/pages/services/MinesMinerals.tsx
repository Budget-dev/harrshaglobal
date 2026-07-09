import { useState, useEffect } from 'react';
import { FadeIn } from '../../components/FadeIn';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Mountain, 
  Pickaxe, 
  Leaf, 
  HardHat, 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  ArrowRight,
  Maximize2,
  X,
  Gauge,
  Workflow,
  Globe2
} from 'lucide-react';
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

  const [activeTab, setActiveTab] = useState<'all' | 'iron' | 'bulk'>('all');
  const [selectedProduct, setSelectedProduct] = useState<MineralProduct | null>(null);

  // High-grade minerals & metals catalogue
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

  // Live Mining Facility Gallery using Sponge Iron Page's active images
  const galleryImages = [
    {
      url: "https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM.jpeg",
      title: "Heavy Excavation Mining Grids",
      desc: "Precision loaders and heavy-duty excavators harvesting high-purity raw iron ore from our active reserves in Ballari."
    },
    {
      url: "https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM%20(1).jpeg",
      title: "Advanced Sizing & Screening Plants",
      desc: "Modern sizing lines and dry screening equipment processing run-of-mine ore into calibrated lump and fine grades."
    },
    {
      url: "https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM%20(2).jpeg",
      title: "Mining Shift Logistics",
      desc: "Heavy dumper trucks and logistics crews operating under high-standard zero-harm workplace safety parameters."
    },
    {
      url: "https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.00%20PM.jpeg",
      title: "Bulk Transit Loading Terminals",
      desc: "High-volume railway loading stations transferring processed minerals seamlessly to national and global export routes."
    },
    {
      url: "https://vennky.sirv.com/iron%20spongs/ballari/%23musuemofnaturalhistory.jpg",
      title: "Ballari Extraction & Geology",
      desc: "Geological survey mapping across our resource corridors ensuring long-term stable mineral reserves."
    },
    {
      url: "https://vennky.sirv.com/iron%20spongs/WhatsApp%20Image%202026-07-03%20at%207.14.00%20PM%20(1).jpeg",
      title: "Integrated Plant Storage",
      desc: "Raw material loading bays and hopper grids managing bulk feedstock for continuous high-purity DRI sponge yields."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-zinc-950 text-white min-h-screen selection:bg-primary selection:text-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Page Hero Header */}
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden mb-24 border border-zinc-800">
            <div className="absolute inset-0">
              <img 
                src="https://vennky.sirv.com/iron%20spongs/ballari/%23musuemofnaturalhistory.jpg" 
                alt="Sustainable Mining & Exploration Backdrop" 
                className="w-full h-full object-cover opacity-35 filter brightness-75 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
            </div>
            
            <div className="relative z-10 max-w-4xl p-8 md:p-16 lg:p-24 flex flex-col justify-center min-h-[500px]">
              <span className="inline-flex items-center gap-1.5 bg-primary/20 text-primary border border-primary/30 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase mb-6 w-fit">
                <Mountain size={14} className="animate-pulse" /> Raw Materials & Strategic Reserves
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                Sustainable Mining <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-teal-400">
                  & Mineral Processing
                </span>
              </h1>
              <p className="text-base md:text-lg text-zinc-300 font-light leading-relaxed mb-10 max-w-2xl">
                Harrsha Global is a high-volume Indian mineral exporter and logistics supervisor. Operating high-Fe iron ore extraction and dry grading facilities across Ballari (Karnataka) and Barbil (Odisha), we supply critical industrial minerals with clear logistics guarantees.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#catalog"
                  className="px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-semibold transition-transform hover:scale-105 rounded-full text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  View Product Catalog <ArrowRight size={14} />
                </a>
                <Link 
                  to="/contact"
                  className="px-8 py-3.5 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold transition-all hover:scale-105 rounded-full text-xs uppercase tracking-wider"
                >
                  Request B2B Trade Quote
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Operational Core Capabilities */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-primary uppercase block mb-3 font-semibold">
              ENGINEERING MATRIX
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Our Operational Excellence</h2>
            <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed mt-2">
              Structuring the heavy supply chains that feed raw power into global metallurgy grids with strict regulatory standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Pickaxe,
                title: "Resource Extraction",
                desc: "Utilizing precision surveying, eco-conscious planning, and high-efficiency crushing loops to extract minerals cleanly."
              },
              {
                icon: Leaf,
                title: "Ecological Responsibility",
                desc: "Zero-compromise regulatory tracking, progressive rehabilitation of exhausted mining zones, and extensive local forest belts."
              },
              {
                icon: Mountain,
                title: "Geological Mapping",
                desc: "Deploying 3D seismic profiling and borehole cores to analyze grade homogeneity and structure long-term supply."
              },
              {
                icon: HardHat,
                title: "Zero-Harm Safety",
                desc: "Strict automated hazard indicators, protective equipment parameters, and dust-mitigation spray loops at mining face lines."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800/80 p-8 rounded-3xl hover:border-white/25 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 bg-primary/10 text-primary border border-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Catalog Section */}
        <div id="catalog" className="mb-24 scroll-mt-32">
          <div className="border-l-4 border-primary pl-4 mb-12">
            <span className="text-xs font-mono tracking-widest uppercase text-primary font-bold block mb-1">
              COMMODITY LISTING
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              B2B Mineral & Ore Portfolio
            </h2>
            <p className="text-zinc-400 text-sm mt-1 max-w-2xl font-light">
              High-purity industrial ores matched with standardized specifications and chemical analysis checks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <div 
                key={idx} 
                className="group bg-zinc-900 border border-zinc-800/80 rounded-3xl overflow-hidden shadow-lg hover:border-white/20 transition-all duration-500 flex flex-col md:flex-row"
              >
                {/* Image side */}
                <div className="w-full md:w-2/5 relative min-h-[220px] md:min-h-auto overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content side */}
                <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-primary font-mono tracking-widest block uppercase mb-1">
                      {product.grade}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6">
                      {product.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-fit px-5 py-2 border border-zinc-800 text-zinc-300 hover:text-white hover:border-white rounded-full text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    View Grades <Maximize2 size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Facility Photo Gallery */}
        <div className="mb-24">
          <div className="border-l-4 border-emerald-500 pl-4 mb-12">
            <span className="text-xs font-mono tracking-widest uppercase text-emerald-500 font-bold block mb-1">
              FIELD OPERATIONS
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Operational & Facility Gallery
            </h2>
            <p className="text-zinc-400 text-sm mt-1 max-w-2xl font-light">
              Real scenes from our high-output mining sites, sizing hubs, and automated railway transit sidings.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, idx) => (
              <div 
                key={idx}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-white/20 transition-all duration-500 bg-zinc-900"
              >
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h4 className="text-white text-sm font-semibold tracking-tight">{image.title}</h4>
                  <p className="text-zinc-400 text-[10px] font-light leading-relaxed mt-1 line-clamp-1">{image.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance Certificate Band */}
        <div className="bg-zinc-900 rounded-3xl border border-zinc-800/80 p-8 md:p-12 mb-24 flex flex-col lg:flex-row items-center gap-8 justify-between">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white tracking-tight">Standardized Lab Analysis Certificates</h3>
              <p className="text-zinc-400 text-xs font-light mt-1 max-w-xl">
                Every metric ton of calibrated ore lumps or sinters dispatched carries verified testing certificates from SGS or other global independent laboratories to assure precise chemical specifications.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Link 
              to="/contact"
              className="px-6 py-3 bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-all rounded-full text-xs uppercase tracking-wider"
            >
              Get Latest Analysis Report
            </Link>
          </div>
        </div>

      </div>

      {/* Dynamic Product Specification Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-white hover:text-black transition-colors p-2 rounded-full cursor-pointer text-white"
                title="Close"
              >
                <X size={18} />
              </button>

              {/* Left Column Image */}
              <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-[450px]">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {selectedProduct.grade}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-white mt-3">{selectedProduct.name}</h3>
                </div>
              </div>

              {/* Right Column Specs */}
              <div className="w-full md:w-1/2 p-8 overflow-y-auto flex flex-col justify-between">
                <div>
                  <h4 className="text-zinc-100 text-xs font-mono tracking-wider uppercase mb-3 border-b border-zinc-800 pb-2">
                    Chemical & Physical Specs
                  </h4>
                  <div className="space-y-3 mb-6">
                    {selectedProduct.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center text-xs">
                        <span className="text-zinc-400 font-light">{spec.label}</span>
                        <span className="text-white font-mono font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-zinc-100 text-xs font-mono tracking-wider uppercase mb-3 border-b border-zinc-800 pb-2">
                    Primary Industry Uses
                  </h4>
                  <ul className="space-y-2 mb-8">
                    {selectedProduct.uses.map((use, i) => (
                      <li key={i} className="flex items-center gap-2 text-zinc-300 text-xs font-light">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-zinc-800 flex justify-between items-center">
                  <span className="text-[10px] text-zinc-500 font-mono uppercase">HARRSHA GLOBAL MINING</span>
                  <Link
                    to="/contact"
                    onClick={() => setSelectedProduct(null)}
                    className="px-5 py-2 bg-primary hover:bg-primary/90 text-white rounded-full text-xs font-semibold uppercase tracking-wider"
                  >
                    Inquire Grade Price
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
