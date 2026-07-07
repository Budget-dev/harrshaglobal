import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from '../components/FadeIn';
import { ArrowUpRight, Grid, Layers, HardHat, Building, X, MapPin, Layers3, Calendar, CheckCircle } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  categoryLabel: string;
  location: string;
  year: string;
  description: string;
  fullDetails: string;
  imageUrl: string;
  status: string;
  scope: string[];
}

export function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: 'All Sectors', icon: Grid },
    { id: 'manufacturing', name: 'Manufacturing', icon: Layers },
    { id: 'realestate', name: 'Real Estate & Infra', icon: Building },
    { id: 'granite', name: 'Granite & Natural Stone', icon: Layers3 },
    { id: 'mining', name: 'Mines, Minerals & Sponge Iron', icon: HardHat },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Advanced Bulletproof Sheet Extrusion Line',
      category: 'manufacturing',
      categoryLabel: 'Bulletproof Sheet Manufacturing',
      location: 'Industrial Zone, Andhra Pradesh',
      year: '2025',
      description: 'High-speed multi-extrusion setup producing military and architectural grade bulletproof protective sheets.',
      fullDetails: 'Our advanced manufacturing line is dedicated to fabricating polycarbonate and layered security sheets with outstanding impact resistance and crystal-clear visibility, serving high-security infrastructure.',
      imageUrl: 'https://vennky.sirv.com/iron%20spongs/ballari/Microsoft_%20Project%20Silica.jpg',
      status: 'Fully Operational',
      scope: ['High-impact extrusion technology', 'Polycarbonate compounding', 'Laminated armor validation']
    },
    {
      id: 2,
      title: 'Real Estate Layouts & Smart Townships',
      category: 'realestate',
      categoryLabel: 'Real Estate & Infrastructure',
      location: 'Karnataka & Andhra Pradesh',
      year: '2026',
      description: 'Premium residential layouts, gated communities, and self-sufficient smart townships.',
      fullDetails: 'Harrshaglobal develops DTCP & VUDA approved layout environments, high-end gated communities with advanced amenities, luxury villas, and multi-functional commercial zones designed with modern layouts.',
      imageUrl: "https://vennky.sirv.com/iron%20spongs/ballari/Don't%20Just%20List%20It_%20Visualize%20It_.jpg",
      status: 'Active Development',
      scope: ['DTCP & VUDA Approval Alignment', 'High-strength concrete foundations', 'Modern architectural rendering']
    },
    {
      id: 3,
      title: 'Sponge Iron Rotary Kiln (Direct Reduced Iron)',
      category: 'mining',
      categoryLabel: 'Sponge Iron & Steel Plant',
      location: 'Tallapalem, Anakapalli, Andhra Pradesh',
      year: '2025',
      description: 'Heavy industrial Direct Reduced Iron rotary kiln delivering high-metallization sponge iron.',
      fullDetails: 'Our state-of-the-art 100,000 MT per year direct reduction iron (DRI) plant. It produces high-quality sponge iron utilizing high-purity iron ore feedstock under strict metallurgical compliance.',
      imageUrl: 'https://vennky.sirv.com/iron%20spongs/WhatsApp%20Image%202026-07-03%20at%207.13.59%20PM.jpeg',
      status: 'Fully Operational',
      scope: ['Rotary kiln thermal engineering', 'Feedstock crushing', 'Dust control & waste heat recovery']
    },
    {
      id: 4,
      title: 'Mini Steel Plant Infrastructure',
      category: 'mining',
      categoryLabel: 'Sponge Iron & Steel Plant',
      location: 'Anakapalli, Visakhapatnam, Andhra Pradesh',
      year: '2025',
      description: 'Automated processing grid, raw sorting bunkers, and high-purity sponge yields.',
      fullDetails: 'Heavy industrial structure serving high-yield manufacturing of premium sponge iron. The site integrates automated bulk-loading structures and non-coking coal handling storage bunkers.',
      imageUrl: 'https://vennky.sirv.com/iron%20spongs/WhatsApp%20Image%202026-07-03%20at%207.14.00%20PM%20(1).jpeg',
      status: 'Fully Operational',
      scope: ['Bulk bunker structural integration', 'Rotary cooler systems', 'Quality control laboratory setup']
    },
    {
      id: 5,
      title: 'Heavy Excavation Mining Grids',
      category: 'mining',
      categoryLabel: 'Iron Ore Mining',
      location: 'Ballari, Karnataka',
      year: '2025',
      description: 'Precision excavation harvesting high-Fe grade raw iron ore veins from our reserves.',
      fullDetails: 'Sourced from the premium mineral-rich zones of Ballari, Karnataka, our operations employ highly efficient hydraulic excavators and automated dump fleets to harvest high-grade Fe iron ore.',
      imageUrl: 'https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM.jpeg',
      status: 'Active Operations',
      scope: ['Geological mapping & drilling', 'Systematic open-cast excavation', 'Safety grid compliance']
    },
    {
      id: 6,
      title: 'Sizing & Screening Plant Line',
      category: 'mining',
      categoryLabel: 'Iron Ore Mining',
      location: 'Ballari, Karnataka',
      year: '2026',
      description: 'Advanced processing facility sorting raw ore into calibrated lumps and fines.',
      fullDetails: 'Utilizing robust dual-deck screen vibrating lines to separate excavated ore into precise industrial specifications (5-18mm calibrated lumps) required by global blast furnaces.',
      imageUrl: 'https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM%20(1).jpeg',
      status: 'Active Processing',
      scope: ['Dual-deck vibration sorter setup', 'Mobile crushing fleet integration', 'Purity test validation']
    },
    {
      id: 7,
      title: 'Mining Shift Logistics & Fleet',
      category: 'mining',
      categoryLabel: 'Iron Ore Mining',
      location: 'Ballari, Karnataka',
      year: '2025',
      description: 'Systematic haulage fleet operations on open-cast mining grids.',
      fullDetails: 'Heavy-duty transport fleets executing synchronized material movement. We guarantee optimal flow of raw minerals from the active mining face to our centralized crushing and stockpiling yard.',
      imageUrl: 'https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM%20(2).jpeg',
      status: 'Active Operations',
      scope: ['Haul road grade planning', 'Fleet monitoring automation', 'Operator safety controls']
    },
    {
      id: 8,
      title: 'Calibrated Ore Sizing & Stockpiling',
      category: 'mining',
      categoryLabel: 'Iron Ore Mining',
      location: 'Barbil, Odisha',
      year: '2026',
      description: 'Processed high-Fe calibrated lumps stacked and verified for chemical homogeneity.',
      fullDetails: 'Stockpiled and sorted high-Fe grade iron ore lumps ready for industrial distribution. Every stack undergoes strict laboratory test screening to confirm stable Fe concentration (62% - 65% purity).',
      imageUrl: 'https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.02%20PM.jpeg',
      status: 'Active Stockpiling',
      scope: ['Homogeneity testing', 'Stockpile volume surveying', 'Moisture control protection']
    },
    {
      id: 9,
      title: 'Bulk Transit Loading Terminals',
      category: 'mining',
      categoryLabel: 'Iron Ore Mining',
      location: 'Barbil, Odisha',
      year: '2026',
      description: 'Automated loading bays transferring processed ore to high-capacity logistics networks.',
      fullDetails: 'Strategic loading terminals coordinating logistics for seamless transport via rail sidings and seaport networks, facilitating high-speed, nationwide delivery.',
      imageUrl: 'https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.00%20PM.jpeg',
      status: 'Active Dispatch',
      scope: ['Automated loadout bin operations', 'Logistics coordination with rail networks', 'Environmental dust suppression']
    },
    {
      id: 10,
      title: 'Sivakasi Yellow Quarry Block Extraction',
      category: 'granite',
      categoryLabel: 'Granite & Natural Stone',
      location: 'Sivakasi, Tamil Nadu',
      year: '2024',
      description: 'Advanced monolithic granite block extraction using automated diamond wire saws.',
      fullDetails: 'Harrshaglobal extracts premium Sivakasi Yellow granite blocks directly from our rich quarry reserves. This project showcases the monolithic block clearing phase under expert geological controls.',
      imageUrl: 'https://vennky.sirv.com/granite/WhatsApp%20Image%202026-07-03%20at%207.09.47%20PM.jpeg',
      status: 'Active Operations',
      scope: ['Diamond wire saw cutting', 'Monolithic block dressing', 'Heavy quarry crane lifting']
    },
    {
      id: 11,
      title: 'Quarry Block Dressing & Stockyard',
      category: 'granite',
      categoryLabel: 'Granite & Natural Stone',
      location: 'Sivakasi, Tamil Nadu',
      year: '2025',
      description: 'Systematic stacking and grading of premium monolithic stone blocks.',
      fullDetails: 'A heavy-duty dressing yard where extracted blocks are carefully sized, graded for grain consistency, and stacked for transport to our high-tech processing plants.',
      imageUrl: 'https://vennky.sirv.com/granite/WhatsApp%20Image%202026-07-03%20at%207.09.48%20PM.jpeg',
      status: 'Active Operations',
      scope: ['Block squaring & grading', 'High-capacity loader movement', 'Inventory tracking systems']
    },
    {
      id: 12,
      title: 'Mirror-Finish Slab Processing',
      category: 'granite',
      categoryLabel: 'Granite & Natural Stone',
      location: 'Visakhapatnam Processing Unit',
      year: '2025',
      description: 'Modern multi-head polishing line delivering elegant mirror-finish slabs.',
      fullDetails: 'Raw blocks are processed through heavy gang saws and multi-head line polishers to produce highly polished Sivakasi Yellow granite slabs with rich color and deep luster.',
      imageUrl: 'https://vennky.sirv.com/granite/WhatsApp%20Image%202026-07-03%20at%207.09.48%20PM%20(1).jpeg',
      status: 'Active Processing',
      scope: ['Gang saw slab slicing', 'Abrasive grit line polishing', 'Color enhancement treatment']
    },
    {
      id: 13,
      title: 'Slabs Packaging & Logistics Yard',
      category: 'granite',
      categoryLabel: 'Granite & Natural Stone',
      location: 'Visakhapatnam, Andhra Pradesh',
      year: '2026',
      description: 'Calibrated packing grids protecting high-value granite for global seaport dispatch.',
      fullDetails: 'Secure wooden-frame crating and loading docks dispatching export-grade slabs to high-end real estate developers across the globe.',
      imageUrl: 'https://vennky.sirv.com/granite/WhatsApp%20Image%202026-07-03%20at%207.09.49%20PM.jpeg',
      status: 'Active Exporting',
      scope: ['A-frame crate packing', 'Inland terminal loading', 'Customs grade inspections']
    },
    {
      id: 14,
      title: 'Elite Blue Quartzite Quarry Face',
      category: 'granite',
      categoryLabel: 'Granite & Natural Stone',
      location: 'Premium Blue Quarry, India',
      year: '2025',
      description: 'Excavating rare, highly valuable deep-blue patterned quartzite blocks.',
      fullDetails: 'Exquisite, exotic blue quartzite veins mined with state-of-the-art wire saw systems. These blocks are highly demanded for high-end luxury interiors.',
      imageUrl: "https://vennky.sirv.com/granite/blue%20granite'/WhatsApp%20Image%202026-07-03%20at%207.12.45%20PM.jpeg",
      status: 'Active Extraction',
      scope: ['Vein pattern mapping', 'Delicate wire saw cutting', 'Structural safety monitoring']
    },
    {
      id: 15,
      title: 'Exotic Blue Slabs Mirror-Polishing',
      category: 'granite',
      categoryLabel: 'Granite & Natural Stone',
      location: 'Advanced Polishing Plant',
      year: '2026',
      description: 'Treating exotic quartzite slabs with premium vacuum epoxy resins for superb luster.',
      fullDetails: 'Utilizing automatic vacuum epoxy lines to treat natural fissures of rare blue quartzite, followed by extensive abrasive diamond polishing for a pristine mirror finish.',
      imageUrl: "https://vennky.sirv.com/granite/blue%20granite'/WhatsApp%20Image%202026-07-03%20at%207.12.44%20PM%20(1).jpeg",
      status: 'Active Processing',
      scope: ['Vacuum resin infusion', 'Diamond grit head polishing', 'Strict defect detection inspection']
    },
    {
      id: 16,
      title: 'Silica & Quartz Mineral Exploration',
      category: 'mining',
      categoryLabel: 'Mines & Minerals',
      location: 'Nellore Reserves, Andhra Pradesh',
      year: '2024',
      description: 'Sustainable exploration and extraction of industrial silica and chemical-grade quartz.',
      fullDetails: 'Geological exploration and sustainable sorting grids supplying ultra-pure raw quartz and high-Fe-free silica sand for glassmakers, solar grids, and industrial manufacturing.',
      imageUrl: 'https://vennky.sirv.com/iron%20spongs/ballari/%23musuemofnaturalhistory.jpg',
      status: 'Fully Operational',
      scope: ['Open-cast mineral extraction', 'Geospatial mapping & core sampling', 'Ecological rehab integration']
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Page Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Our Corporate Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a202c] mb-6 tracking-tight">
              Shaping Global Industry Landmarks
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light">
              Explore our core corporate projects. From advanced polycarbonate manufacturing lines to high-purity raw mineral mines, real estate structures, and premium stone extraction.
            </p>
          </div>
        </FadeIn>

        {/* Category Filters */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16 max-w-5xl mx-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-primary text-white shadow-md scale-[1.03]' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  <Icon size={16} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Section with Overlay */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white flex items-center gap-2 text-sm font-medium">
                      View Details <ArrowUpRight size={18} />
                    </div>
                  </div>
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-3 font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {project.location.split(',')[0]}
                    </span>
                    <span>{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-3 line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      {project.status}
                    </span>
                    <span className="text-sm font-semibold text-[#1A1A1A] group-hover:text-primary transition-colors flex items-center gap-1">
                      Explore <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-md"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl z-50 max-h-[90vh] flex flex-col md:flex-row"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-900 p-2.5 rounded-full shadow-md transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                {/* Left/Top: Image Column */}
                <div className="w-full md:w-1/2 relative bg-gray-900 aspect-video md:aspect-auto">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent hidden md:block" />
                  <div className="absolute bottom-6 left-6 right-6 text-white hidden md:block">
                    <span className="text-xs bg-primary text-white px-3 py-1 rounded-full font-medium mb-2 inline-block">
                      {selectedProject.categoryLabel}
                    </span>
                    <p className="text-sm opacity-80 flex items-center gap-1.5">
                      <MapPin size={14} /> {selectedProject.location}
                    </p>
                  </div>
                </div>

                {/* Right/Bottom: Details Column */}
                <div className="w-full md:w-1/2 p-8 md:p-10 overflow-y-auto max-h-[60vh] md:max-h-[90vh] flex flex-col">
                  {/* Mobile Mobile-Only Top Metadata */}
                  <div className="md:hidden mb-4">
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold mb-2 inline-block">
                      {selectedProject.categoryLabel}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                    {selectedProject.title}
                  </h2>

                  {/* Quick Info Grid */}
                  <div className="grid grid-cols-2 gap-4 pb-6 mb-6 border-b border-gray-100">
                    <div>
                      <span className="text-xs text-gray-400 block mb-1 uppercase tracking-wider font-semibold">Location</span>
                      <span className="text-sm font-medium text-gray-800 flex items-center gap-1">
                        <MapPin size={14} className="text-gray-400" /> {selectedProject.location.split(',')[0]}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 block mb-1 uppercase tracking-wider font-semibold">Status</span>
                      <span className="text-sm font-semibold text-emerald-700 flex items-center gap-1">
                        <CheckCircle size={14} className="text-emerald-500" /> {selectedProject.status}
                      </span>
                    </div>
                    <div className="pt-2">
                      <span className="text-xs text-gray-400 block mb-1 uppercase tracking-wider font-semibold">Commenced / Year</span>
                      <span className="text-sm font-medium text-gray-800 flex items-center gap-1">
                        <Calendar size={14} className="text-gray-400" /> {selectedProject.year}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-4 mb-6">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Project Overview</h4>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                      {selectedProject.fullDetails}
                    </p>
                  </div>

                  {/* Key Scope */}
                  <div className="space-y-3 mt-auto">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Implementation Scope</h4>
                    <ul className="space-y-2">
                      {selectedProject.scope.map((item, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        window.location.href = '/contact';
                      }}
                      className="w-full bg-[#1A1A1A] hover:bg-primary text-white py-3.5 rounded-full font-medium transition-colors text-center text-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Inquire About Similar Scope <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
