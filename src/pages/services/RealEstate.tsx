import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../components/FadeIn';
import { 
  Building2, 
  MapPin, 
  Award, 
  ArrowRight,
  X,
  Sparkles,
  HardHat,
  Home,
  ShieldCheck,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  type: 'infrastructure' | 'realestate';
  image: string;
  location: string;
  tag?: string;
  specs: string[];
  highlights: string[];
}

export function RealEstate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'infrastructure' | 'realestate'>('all');

  const projects: ProjectItem[] = [
    {
      id: "mini-steel-support",
      title: "Mini Steel Plant Heavy Infrastructure",
      type: "infrastructure",
      tag: "Heavy Civil Engineering",
      desc: "Constructing massive structural foundations, rotary kiln supports, raw storage bays, and material handling grids for heavy industrial operations.",
      image: "https://vennky.sirv.com/iron%20spongs/WhatsApp%20Image%202026-07-03%20at%207.13.59%20PM.jpeg",
      location: "Anakapalli Industrial Hub",
      specs: [
        "High-Temperature Rotary Kiln Foundations",
        "Reinforced Heavy-Load Bins & Gantry Rails",
        "Integrated Waste Heat Recovery Structuring",
        "Sponge Iron Storage & Delivery Silos"
      ],
      highlights: [
        "Sustains heavy dynamic and thermal cyclic loading safely",
        "Engineered with ultra-durable reinforced concrete blends",
        "Perfect integration with automated logistics conveyor towers",
        "Zero-tolerance structural safety factor compliance standards"
      ]
    },
    {
      id: "transit-loading",
      title: "Logistics Terminals & Bulk Loading Bays",
      type: "infrastructure",
      tag: "Industrial Logistics",
      desc: "Constructing high-volume railway loading stations, hopper grids, and transit depots to ensure frictionless bulk mineral dispatch.",
      image: "https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.00%20PM.jpeg",
      location: "Ballari & Odisha Rail Terminals",
      specs: [
        "High-Capacity Bulk Cargo Hoppers",
        "Heavy Vehicle Turning Loops & Loading Platforms",
        "Precision Automated Weighbridge Infrastructure",
        "Integrated Dust Suppression Systems"
      ],
      highlights: [
        "Optimized to handle 20,000+ metric tons of daily dispatch",
        "Constructed with high-abrasion monolithic wear-slabs",
        "Direct connection to main commercial broad-gauge railway sidings",
        "Advanced safety parameters for heavy industrial loaders and trucks"
      ]
    },
    {
      id: "roads-highways",
      title: "Expressways & Industrial Roadways",
      type: "infrastructure",
      tag: "Civil Infrastructure",
      desc: "Laying robust, heavy-grade asphalt and concrete roadways designed to connect national logistics corridors and carry multi-axle freight.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200",
      location: "National Highway Corridors",
      specs: [
        "Rigid Jointed Cement Concrete (PQC) Pavements",
        "High-Performance Asphalt Overlays",
        "Heavy-Duty Retaining & Structural Walls",
        "Advanced High-Reflective Road Markings"
      ],
      highlights: [
        "Designed to withstand 100+ million standard axles (MSA)",
        "Equipped with optimal runoff stormwater drainage ditches",
        "Advanced seismic-resilient grading across rugged geographical terrains",
        "Integrated toll and cargo-monitoring lay-by infrastructure"
      ]
    },
    {
      id: "solar-energy-parks",
      title: "Utility-Scale Solar Energy Parks",
      type: "infrastructure",
      tag: "Green Power Infrastructure",
      desc: "Designing structural array mounts, high-capacity converter yards, and complete access layouts for utility-scale renewable parks.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
      location: "Rayalaseema Energy Zone",
      specs: [
        "High-Durability Galvanized Structural Piles",
        "Smart Tracking Photovoltaic Foundations",
        "Substation Civil Grading & Control Blocks",
        "Robust Security Perimeters & Ingress Gates"
      ],
      highlights: [
        "Seismically validated and wind-tunnel tested structural steel mounts",
        "Minimal environmental footprint with integrated storm mitigation channels",
        "Strategic layout designed for rapid preventative maintenance vehicle access",
        "Engineered to sustain harsh, direct solar radiation over a 25-year lifecycle"
      ]
    },
    {
      id: "premium-layouts",
      title: "Premium Residential Layouts",
      type: "realestate",
      tag: "DTCP & VUDA Approved",
      desc: "Carefully planned, legally approved plotted developments offering high-yield appreciation in strategic corridors with clear title guarantees.",
      image: "https://vennky.sirv.com/iron%20spongs/ballari/Don't%20Just%20List%20It_%20Visualize%20It_.jpg",
      location: "Visakhapatnam & Anakapalli Zones",
      specs: [
        "VUDA & DTCP Regulatory Approvals",
        "100% Vastu Compliant Plotting",
        "Underground Drainage & Blacktop Roads",
        "High-Yield Investment Corridors"
      ],
      highlights: [
        "Immediate registration & clear land title deeds",
        "Lush green parks and active avenue plantation structures",
        "Strategic proximity to upcoming expressways and railway lines",
        "24/7 boundary-fenced perimeter with layout security"
      ]
    },
    {
      id: "luxury-villas",
      title: "Luxury Villas & Modern Apartments",
      type: "realestate",
      tag: "Contemporary Architecture",
      desc: "Crafting beautiful architectural masterpieces featuring spacious open layouts, premium grade materials, and abundant natural ventilation.",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
      location: "Vizag Smart City Limits",
      specs: [
        "Architect-Designed Smart Layouts",
        "High-Grade Italian Marble & Granite Finishes",
        "Premium Soundproof Polycarbonate Glazing",
        "Solar-Powered Grid Backup Ready"
      ],
      highlights: [
        "Private swimming pool and landscaped roof terraces",
        "Multi-car garages with electric vehicle charging docks",
        "Eco-friendly rainwater collection and greywater treatment",
        "Ultra-fast fiber optic connectivity pre-routed throughout"
      ]
    },
    {
      id: "gated-communities",
      title: "Secure Gated Communities",
      type: "realestate",
      tag: "Secure Living Enclaves",
      desc: "Delivering modern, fully enclosed neighborhoods featuring state-of-the-art utilities, underground electricity, clubhouses, and active surveillance.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
      location: "Kapuluppada Scenic Sectors",
      specs: [
        "24/7 Security Patrol & Smart CCTV Arcs",
        "Underground Fiber, Water & Power Cables",
        "Multi-tier Clubhouse & Wellness Center",
        "35% Dedicated Green Belt Coverage"
      ],
      highlights: [
        "Walkways, cycling paths, and outdoor active arenas",
        "Centralized solar-assisted street illumination networks",
        "In-house property management and waste recovery cells",
        "Strategically located near major educational and medical zones"
      ]
    },
    {
      id: "commercial-complexes",
      title: "Commercial Spaces & Office Towers",
      type: "realestate",
      tag: "Strategic Corporate Spaces",
      desc: "Building highly efficient corporate environments, modern business offices, retail complexes, and commercial tech zones.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      location: "Vizag High-Tech Zone",
      specs: [
        "Double-Glazed Polycarbonate Low-E Curtains",
        "Flexible Column-Free Internal Floor Plates",
        "Smart BMS (Building Management Systems)",
        "Generous Grade-A Parking Infrastructure"
      ],
      highlights: [
        "Integrated high-speed multi-destination elevators",
        "LEED Gold certified architectural sustainability principles",
        "Advanced fire suppression systems with fire-safe stairwells",
        "Located in the premier commercial district with high connectivity"
      ]
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeTab);

  const reasons = [
    {
      title: "Engineered for Generations",
      desc: "We build all structures with high-grade premium materials to meet global civil and industrial tolerance thresholds."
    },
    {
      title: "Absolute Title Clarity",
      desc: "Complete regulatory compliance. Every square foot carries clean titles and verified DTCP/VUDA approvals."
    },
    {
      title: "Green Infrastructure",
      desc: "Integrated water harvesting grids, landscaped buffers, solar-ready avenues, and advanced sustainable construction."
    },
    {
      title: "Strategic Growth Locations",
      desc: "Developments strategically positioned in booming high-tech zones, commercial routes, and heavy transit corridors."
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen selection:bg-blue-600 selection:text-white">
      
      {/* Premium Elegant Header Banner */}
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        {/* Soft decorative blur backgrounds */}
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute left-[-100px] bottom-0 w-[350px] h-[350px] bg-indigo-50/40 rounded-full blur-[100px] pointer-events-none z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-left max-w-4xl space-y-6">
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
                <Building2 size={13} /> Global Developments
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
                Real Estate & <br />
                <span className="text-blue-600">Infrastructure Excellence</span>
              </h1>
              
              <div className="w-12 h-1 bg-blue-600 rounded-full mt-4" />
              
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal max-w-3xl pt-2">
                Harrsha Global Pvt. Ltd. delivers state-of-the-art heavy industrial civil infrastructure, high-efficiency logistics sidings, solar parks, and premium residential layouts. We blend physical structural engineering with clear legal compliance and master-planned execution.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Interactive Tabs / Filter Selector */}
      <section className="sticky top-[80px] md:top-[88px] z-30 bg-white/95 backdrop-blur-md border-y border-slate-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all uppercase ${
                activeTab === 'all' 
                  ? 'bg-slate-950 text-white shadow-sm' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              All Ventures
            </button>
            <button
              onClick={() => setActiveTab('infrastructure')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all uppercase flex items-center gap-1.5 ${
                activeTab === 'infrastructure' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              <HardHat size={14} /> Heavy Infrastructure
            </button>
            <button
              onClick={() => setActiveTab('realestate')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all uppercase flex items-center gap-1.5 ${
                activeTab === 'realestate' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              <Home size={14} /> Premium Real Estate
            </button>
          </div>
          
          <div className="text-xs font-semibold text-slate-400 tracking-wider uppercase font-mono hidden md:block">
            {filteredProjects.length} Verified Solutions Displayed
          </div>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <section className="py-16 md:py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200/50 transition-all duration-500 flex flex-col justify-between"
                >
                  {/* Photo Wrapper */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Visual Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                    
                    {/* Top Right Badges */}
                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider text-white shadow-sm ${
                      project.type === 'infrastructure' ? 'bg-blue-600' : 'bg-emerald-600'
                    }`}>
                      {project.type === 'infrastructure' ? 'Infrastructure' : 'Premium Space'}
                    </span>

                    {/* Geolocation Tag */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-white font-medium drop-shadow-md">
                      <MapPin size={12} className="text-blue-400 fill-blue-400/10" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  {/* Content Information */}
                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div>
                      <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider block mb-1">
                        {project.tag}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-xs font-normal leading-relaxed mt-2 line-clamp-3">
                        {project.desc}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-widest pt-2 cursor-pointer w-full text-left"
                    >
                      Specifications <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Premium Strategic Advantage Section */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
              <Sparkles size={12} /> Master Planning
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
              Why Partner With Harrsha Global?
            </h2>
            <div className="w-10 h-[3px] bg-blue-600 mx-auto rounded-full" />
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              We engineer layouts and physical installations to high industry benchmarks, matching premium specifications with complete transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100 hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100">
                    <Award size={18} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-950 mb-2 tracking-tight">
                    {reason.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Clean Call To Action Section */}
      <section className="relative py-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <img 
            src="https://vennky.sirv.com/iron%20spongs/ballari/Don't%20Just%20List%20It_%20Visualize%20It_.jpg" 
            alt="Harrshaglobal Infrastructure Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Soft atmospheric blue glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Ready to Develop Your Next Venture?
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Consult our dedicated master planning and heavy engineering desks to discuss custom layouts, DTCP/VUDA certifications, bulk transit siding, or heavy-duty civil works.
          </p>
          <div className="pt-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] rounded-xl inline-flex items-center gap-2 shadow-lg shadow-blue-950/40 text-xs sm:text-sm uppercase tracking-wider"
            >
              Consult Our Engineering Desk
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Elegant Light Specifications Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 bg-slate-100/80 hover:bg-slate-900 hover:text-white text-slate-700 transition-colors p-2.5 rounded-full cursor-pointer shadow-sm"
                title="Close specifications"
              >
                <X size={16} />
              </button>

              {/* Left Column: Visual Area */}
              <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-[500px] bg-slate-100">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white shadow-md ${
                    selectedProject.type === 'infrastructure' ? 'bg-blue-600' : 'bg-emerald-600'
                  }`}>
                    {selectedProject.type === 'infrastructure' ? 'Heavy Civil' : 'Premium Space'}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight mt-3 leading-tight drop-shadow-sm text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-slate-200 text-xs flex items-center gap-1.5 mt-2 font-semibold">
                    <MapPin size={12} className="text-blue-400" />
                    {selectedProject.location}
                  </p>
                </div>
              </div>

              {/* Right Column: Specification Highlights Details */}
              <div className="w-full md:w-1/2 p-8 lg:p-12 overflow-y-auto flex flex-col justify-between bg-white">
                <div>
                  <span className="text-[10px] text-blue-600 font-bold tracking-widest uppercase block mb-2">
                    {selectedProject.tag || 'HARRSHAGLOBAL CERTIFIED'}
                  </span>
                  
                  <h4 className="text-slate-950 text-sm font-black mb-4 uppercase tracking-wider border-b border-slate-100 pb-2">
                    Project Specifications
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {selectedProject.specs.map((spec, i) => (
                      <li key={i} className="flex gap-2.5 text-slate-700 text-sm font-normal leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-blue-100">
                          ✓
                        </span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-slate-950 text-sm font-black mb-4 uppercase tracking-wider border-b border-slate-100 pb-2">
                    Key Highlights & Advantages
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.highlights.map((hl, i) => (
                      <li key={i} className="flex gap-2.5 text-slate-700 text-xs sm:text-sm font-normal leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between">
                  <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase font-mono">
                    HARRSHAGLOBAL DEVELOPMENTS
                  </div>
                  <Link
                    to="/contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all text-xs uppercase tracking-wider flex items-center gap-1"
                  >
                    Inquire Details <ArrowRight size={14} />
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
