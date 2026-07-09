import { useState, useEffect } from 'react';
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

  const projects: ProjectItem[] = [
    {
      id: "mini-steel-support",
      title: "Mini Steel Plant Heavy Infrastructure",
      type: "infrastructure",
      tag: "Heavy Civil Engineering",
      desc: "Constructing massive structural foundations, rotary kiln supports, raw storage bays, and material handling grids for heavy industrial operations.",
      image: "https://vennky.sirv.com/iron%20spongs/WhatsApp%20Image%202026-07-03%20at%207.13.59%20PM.jpeg", // Sponge iron kiln!
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
      image: "https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.00%20PM.jpeg", // Sponge iron cargo loading!
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

  const infraProjects = projects.filter(p => p.type === 'infrastructure');
  const realEstateProjects = projects.filter(p => p.type === 'realestate');

  const reasons = [
    {
      title: "Trusted Global Quality",
      desc: "We apply global engineering and safety standards across our industrial and real estate footprints."
    },
    {
      title: "100% Legal Clearance",
      desc: "Absolute zero-compromise regulatory approach. Every layout carries authentic DTCP, VUDA, and local approval credentials."
    },
    {
      title: "Eco-Conscious Greenery",
      desc: "We focus on rainwater harvesting, extensive green belts, and low-carbon construction methods."
    },
    {
      title: "Strategic Landholding",
      desc: "Our projects sit directly within high-growth industrial, residential, and logistics corridors for maximum yield."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-zinc-950 text-white min-h-screen selection:bg-primary selection:text-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Main Header */}
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-primary/20">
              <Building2 size={14} className="animate-pulse" /> Engineering Legacies
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
              Real Estate & Infrastructure
            </h1>
            <p className="text-xs md:text-sm text-zinc-400 font-mono tracking-widest uppercase mb-6">
              HEAVY INFRASTRUCTURE • LAND ACQUISITION • COMPLETED VENTURES
            </p>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
              Harrshaglobal Pvt Ltd is a premier developer of heavy civil infrastructure, logistics hubs, industrial plant layouts, and premium residential gated communities. We blend structural steel integrity with clean environmental master planning.
            </p>
          </div>
        </FadeIn>

        {/* SECTION 1: Heavy Industrial & Logistics Infrastructure */}
        <div className="mb-24">
          <FadeIn>
            <div className="border-l-4 border-primary pl-4 mb-10">
              <span className="text-xs font-mono tracking-widest uppercase text-primary font-bold block mb-1">
                DIVISION I
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <HardHat className="text-primary" size={24} /> Heavy Civil & Industrial Infrastructure
              </h2>
              <p className="text-zinc-400 text-sm mt-1 max-w-3xl font-light">
                Engineering deep foundations, automated siding stations, transit silos, and heavy dynamic concrete structures optimized for continuous heavy-duty industrial operations.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infraProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col bg-zinc-900 border border-zinc-800/80 rounded-3xl overflow-hidden shadow-lg hover:border-white/25 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary text-white">
                    Heavy Civil
                  </span>

                  {/* Location label */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-zinc-300 font-medium">
                    <MapPin size={12} className="text-primary" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-500 font-mono tracking-widest block mb-2 uppercase">
                      {project.tag}
                    </span>
                    <h3 className="text-lg font-semibold mb-3 text-white tracking-tight leading-snug group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6 line-clamp-3">
                      {project.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-white transition-colors uppercase tracking-widest mt-auto cursor-pointer"
                  >
                    Specifications <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: Premium Residential & Gated Developments */}
        <div className="mb-24">
          <FadeIn>
            <div className="border-l-4 border-emerald-500 pl-4 mb-10">
              <span className="text-xs font-mono tracking-widest uppercase text-emerald-500 font-bold block mb-1">
                DIVISION II
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <Home className="text-emerald-500" size={24} /> Premium Real Estate & Gated Enclaves
              </h2>
              <p className="text-zinc-400 text-sm mt-1 max-w-3xl font-light">
                Delivering highly appreciated, legally approved DTCP and VUDA developments featuring lush green belts, wide blacktop roadways, underground electrical feeds, and custom layouts.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {realEstateProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col bg-zinc-900 border border-zinc-800/80 rounded-3xl overflow-hidden shadow-lg hover:border-white/25 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white">
                    Premium Layout
                  </span>

                  {/* Location label */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-zinc-300 font-medium">
                    <MapPin size={12} className="text-emerald-500" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-500 font-mono tracking-widest block mb-2 uppercase">
                      {project.tag}
                    </span>
                    <h3 className="text-lg font-semibold mb-3 text-white tracking-tight leading-snug group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6 line-clamp-3">
                      {project.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 group-hover:text-white transition-colors uppercase tracking-widest mt-auto cursor-pointer"
                  >
                    Specifications <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-zinc-900 rounded-3xl border border-zinc-800/80 p-8 md:p-16 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
              <Sparkles size={12} /> Strategic Advantage
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Why Partner with Harrshaglobal?
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed mt-3">
              We engineer structures that last generations, combining strict legal transparency with robust construction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800/60 hover:border-zinc-700 transition-colors flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 border border-primary/20">
                  <Award size={18} />
                </div>
                <h4 className="text-base font-medium text-white mb-2 tracking-tight">
                  {reason.title}
                </h4>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic CTA Block */}
        <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 p-12 lg:p-20 text-center">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://vennky.sirv.com/iron%20spongs/ballari/Don't%20Just%20List%20It_%20Visualize%20It_.jpg" 
              alt="Harrshaglobal Infrastructure Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
              Let's Develop Your Next Venture
            </h2>
            <p className="text-zinc-400 text-base font-light leading-relaxed">
              Connect with our master planning and heavy engineering desks to secure DTCP/VUDA approved layouts, solar grids, transit siding, or mini steel foundations.
            </p>
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="px-8 py-3.5 bg-white hover:bg-zinc-200 text-zinc-950 font-bold transition-all hover:scale-105 rounded-full inline-flex items-center gap-2 shadow-xl text-xs uppercase tracking-wider"
              >
                Consult Our Engineering Desk
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Project Specifications Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-white hover:text-black transition-colors p-2 rounded-full cursor-pointer text-white"
                title="Close specifications"
              >
                <X size={18} />
              </button>

              {/* Left Side: Dynamic Image */}
              <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px]">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    selectedProject.type === 'infrastructure' 
                      ? 'bg-primary text-white' 
                      : 'bg-emerald-600 text-white'
                  }`}>
                    {selectedProject.type === 'infrastructure' ? 'Infrastructure' : 'Real Estate'}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mt-3 leading-snug">
                    {selectedProject.title}
                  </h3>
                  <p className="text-zinc-300 text-xs flex items-center gap-1.5 mt-2 font-medium">
                    <MapPin size={12} className="text-primary" />
                    {selectedProject.location}
                  </p>
                </div>
              </div>

              {/* Right Side: Specifications */}
              <div className="w-full md:w-1/2 p-8 lg:p-12 overflow-y-auto flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase block mb-3">
                    {selectedProject.tag || 'Harrshaglobal Certified Venture'}
                  </span>
                  <h4 className="text-zinc-100 text-sm font-semibold mb-4 uppercase tracking-wider border-b border-zinc-800 pb-2">
                    Project Specifications
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {selectedProject.specs.map((spec, i) => (
                      <li key={i} className="flex gap-2.5 text-zinc-300 text-sm font-light leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                          ✓
                        </span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-zinc-100 text-sm font-semibold mb-4 uppercase tracking-wider border-b border-zinc-800 pb-2">
                    Key Highlights & Advantages
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.highlights.map((hl, i) => (
                      <li key={i} className="flex gap-2.5 text-zinc-300 text-sm font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-8 border-t border-zinc-800 flex flex-wrap gap-4 items-center justify-between">
                  <div className="text-xs text-zinc-500 font-mono">
                    HARRSHAGLOBAL GROUP
                  </div>
                  <Link
                    to="/contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-colors text-xs uppercase tracking-wider flex items-center gap-1"
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
