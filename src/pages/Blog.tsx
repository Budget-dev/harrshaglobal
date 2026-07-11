import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from '../components/FadeIn';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  X, 
  BookOpen, 
  Layers, 
  Share2, 
  Bookmark,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  categoryLabel: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  imageUrl: string;
  tags: string[];
  keyTakeaways: string[];
}

export function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  const blogPosts: BlogPost[] = [
    {
      id: "dri-metallurgy-future",
      title: "The Future of Direct Reduced Iron (DRI) in Sustainable Metallurgy",
      category: "metallurgy",
      categoryLabel: "Metallurgy & Steel",
      date: "July 08, 2026",
      readTime: "5 min read",
      author: "Dr. A. K. Banerjee",
      authorRole: "Chief Metallurgist",
      imageUrl: "https://vennky.sirv.com/iron%20spongs/WhatsApp%20Image%202026-07-03%20at%207.13.59%20PM.jpeg",
      excerpt: "How Direct Reduced Iron (Sponge Iron) and advanced rotary kiln technology are redefining low-carbon feedstocks for modern steel manufacturing.",
      tags: ["Sponge Iron", "Direct Reduction", "Decarbonization", "Industrial Kilns"],
      keyTakeaways: [
        "Traditional blast furnaces rely on heavy coking coal with high carbon footprint.",
        "DRI replaces coking coal with non-coking coal as a solid-state reducing agent.",
        "Harrsha Global achieves high metallization rates (>88%) at our Anakapalli plant.",
        "Waste Heat Recovery Systems capture energy from kiln exhaust to generate clean electricity."
      ],
      content: [
        "Harrsha Global operates a state-of-the-art mini steel plant specializing in premium-grade Sponge Iron (Direct Reduced Iron) in Tallapalem, Anakapalli. Utilizing high-end DRI rotary kiln technology and high-purity iron ore from our Ballari and Barbil reserves, we manufacture high-grade sponge iron with exceptional metallization rates.",
        "Direct Reduced Iron represents a critical pathway toward sustainable, energy-efficient steel production. Traditional metallurgy relies heavily on coking coal within blast furnaces, resulting in extreme greenhouse gas emissions. In contrast, the solid-state DRI process converts raw iron ore into sponge iron at temperatures below the melting point, using non-coking coal as the primary reducing agent.",
        "Our rotary kilns are carefully calibrated to maintain precise thermal zones, ensuring uniform carbon absorption and consistent product density. The resulting sponge iron exhibits outstanding mechanical strength, making it ideal for direct furnace charging in steel melting shops nationwide.",
        "Furthermore, our commitment to environmental responsibility is demonstrated by our integrated Waste Heat Recovery Systems (WHRS). By capturing high-temperature exhaust gases from the kiln, we generate clean, captive electric power, establishing a highly circular, eco-efficient manufacturing lifecycle."
      ]
    },
    {
      id: "dry-screening-yields",
      title: "Unlocking High-Purity Ore Yields through Dry Screening Technology",
      category: "mining",
      categoryLabel: "Mining & Minerals",
      date: "June 28, 2026",
      readTime: "4 min read",
      author: "M. J. Raju",
      authorRole: "Mining Division Director",
      imageUrl: "https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM.jpeg",
      excerpt: "Optimizing iron ore lump and fine consistency utilizing mechanical dual-deck vibration screens and high-capacity mining grids in Ballari.",
      tags: ["Iron Ore", "Dry Screening", "Mining Tech", "Logistics"],
      keyTakeaways: [
        "Ore sizing plays a fundamental role in downstream blast furnace thermal efficiency.",
        "Harrsha Global screens ore to tight 5mm - 18mm calibrated lump specifications.",
        "Advanced dry screening systems reduce water usage compared to wet-washing methods.",
        "Automated transport fleets coordinate ore flow directly to centralized railheads."
      ],
      content: [
        "Our active iron ore extraction divisions in Ballari (Karnataka) and Barbil (Odisha) operate at the forefront of modern mineral processing. Sourced directly from our rich reserves, every tonne of excavated material undergoes high-efficiency mechanical dry screening to meet strict industrial quality standards.",
        "Maintaining chemical homogeneity is one of open-cast mining's most critical challenges. Our dry screening plants utilize high-frequency dual-deck vibrating screen lines that separate raw ore into precise, calibrated lumps (5-18mm) and industrial-grade fines without degrading the crystalline physical strength.",
        "By avoiding intensive wet-washing techniques, our mechanical screening methods conserve local water resources while delivering low-moisture feedstock. Low moisture ratios prevent physical clogging in transport terminals and reduce energy waste during shipping.",
        "Every batch of processed ore is stocked and rigorously analyzed in our centralized labs to confirm Fe concentrations between 62% and 65%. Automated conveyor belts then transfer the finished product directly to high-capacity loading terminals, facilitating seamless multimodal transit to local seaports."
      ]
    },
    {
      id: "precision-granite-processing",
      title: "Precision Slicing & Polishing: Sourcing Premium Granite Slabs",
      category: "granite",
      categoryLabel: "Granite & Natural Stone",
      date: "May 19, 2026",
      readTime: "6 min read",
      author: "S. Raghavan",
      authorRole: "Stoneworks Quality Inspector",
      imageUrl: "https://vennky.sirv.com/granite/WhatsApp%20Image%202026-07-03%20at%207.09.48%20PM%20(1).jpeg",
      excerpt: "From deep quarry extraction to mirror-finish processing: the technology behind world-class natural granite slabs.",
      tags: ["Granite", "Italian Saws", "Mirror Finish", "Export Quality"],
      keyTakeaways: [
        "Quarry wire-saw cutting eliminates structural micro-fissures in blocks.",
        "Italian multi-blade gang saws slice monoliths with millimeter accuracy.",
        "Progressive diamond grit abrasives achieve high polish gloss sheen (>95 GU).",
        "Vacuum epoxy resin infusions seal natural pores for weather resistance."
      ],
      content: [
        "Harrsha Global bridges natural stone reserves with premier international real estate developers. Our stone processing facilities treat world-renowned varieties like Sivakasi Yellow, Black Galaxy, and SK Blue using cutting-edge stone-craft technologies.",
        "The journey of a luxury slab begins deep within our quarries in Tekkali and Srikakulam. Instead of disruptive blasting, we employ high-tension diamond wire saws to slice monolithic blocks cleanly, protecting the inherent crystalline structures from micro-fractures.",
        "Once transported to our processing plant, raw blocks are calibrated and sliced using computer-guided Italian multi-blade gang saws. This yields uniform slabs with exceptional flatness and consistent thickness.",
        "To achieve a durable mirror finish, the slabs pass through an automated polishing line with progressive diamond grit heads. Slabs receive a vacuum epoxy treatment that penetrates natural microscopic pores. The final polish reaches over 95 Gloss Units, showcasing the stones' deep, iridescent patterns with long-term weather resistance."
      ]
    },
    {
      id: "smart-township-design",
      title: "Developing Gated Communities: Smart Living Layout Design",
      category: "realestate",
      categoryLabel: "Real Estate & Infrastructure",
      date: "April 05, 2026",
      readTime: "4 min read",
      author: "V. Srinivas",
      authorRole: "Infrastructure Architect",
      imageUrl: "https://vennky.sirv.com/iron%20spongs/ballari/Don't%20Just%20List%20It_%20Visualize%20It_.jpg",
      excerpt: "Designing VUDA and DTCP approved townships that prioritize architectural harmony, modern security, and sustainable living.",
      tags: ["Real Estate", "Smart City", "Infrastructure", "Layouts"],
      keyTakeaways: [
        "Aesthetic layouts require careful integration with natural topographical contours.",
        "DTCP and VUDA approved spacing guarantees safe, legally secured investments.",
        "Underground cabling and micro-drainage prevent environmental wear.",
        "Eco-conscious landscaping preserves regional flora and open space."
      ],
      content: [
        "At Harrshaglobal, property development goes far beyond basic brick-and-mortar construction. We approach residential layout design with a focus on regional aesthetics, structural resilience, and long-term security.",
        "Our recent residential developments across Karnataka and Andhra Pradesh represent premium self-contained environments. Every layout is structured to maintain ample green spaces, wide arterial concrete roads, and clear architectural symmetry.",
        "By aligning our layouts with DTCP and VUDA regulatory approvals, we provide clean, reliable land records for prospective homeowners. Additionally, we integrate critical infrastructure like dedicated stormwater channels, secure gated entrances, and smart high-density electrical cabling.",
        "The resulting communities foster sustainable environments where architectural quality, modern safety systems, and native landscape landscaping converge to support thriving residential growth."
      ]
    },
    {
      id: "bulletproof-extrusion-lines",
      title: "Advanced Polymer Extrusion for High-Security Protective Armor",
      category: "manufacturing",
      categoryLabel: "Advanced Manufacturing",
      date: "March 12, 2026",
      readTime: "5 min read",
      author: "Dr. Lisa Vance",
      authorRole: "Polymer Tech Director",
      imageUrl: "https://vennky.sirv.com/iron%20spongs/ballari/Microsoft_%20Project%20Silica.jpg",
      excerpt: "How high-speed co-extrusion technology creates impact-resistant, lightweight bulletproof sheets for defense and aerospace.",
      tags: ["Polymer", "Extrusion", "Ballistics", "Security Glass"],
      keyTakeaways: [
        "Polycarbonate sheets offer up to 250 times the impact strength of glass.",
        "Co-extrusion lines bond multiple protective resin layers in a single pass.",
        "Tempering processes eliminate internal thermal stresses for optical clarity.",
        "Calibrated protective armor serves military, banking, and high-security sectors."
      ],
      content: [
        "Our advanced manufacturing division runs state-of-the-art high-speed co-extrusion lines. We manufacture military and architectural grade protective polycarbonate sheets designed to withstand high ballistic impacts.",
        "Polycarbonate compounding involves blending high-purity resins with UV-resistant coatings. These sheets are up to 250 times stronger than standard float glass while remaining half the weight, providing an ideal protective barrier for defense vehicles, banks, and secure facilities.",
        "The co-extrusion process bonds multiple layers of defense polymer in a single, high-pressure flow. This multi-layer architecture absorbs kinetic energy from impacts, dissipating forces across a wider surface area.",
        "Every production run undergoes thermal stress relieving to ensure optical clarity. This prevents warping and ensures clear, undistorted visibility, meeting the demanding security standards of international defense contractors."
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Insights' },
    { id: 'metallurgy', name: 'Metallurgy' },
    { id: 'mining', name: 'Mining & Minerals' },
    { id: 'granite', name: 'Natural Stone' },
    { id: 'realestate', name: 'Infrastructure' },
    { id: 'manufacturing', name: 'Manufacturing' }
  ];

  const featuredPost = blogPosts[0]; // One big featured post
  const feedPosts = activeCategory === 'all' 
    ? blogPosts.slice(1) 
    : blogPosts.filter(post => post.category === activeCategory);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter(bId => bId !== id));
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen selection:bg-slate-950 selection:text-white pt-28 pb-20 px-6 md:px-12">
      <div className="w-full max-w-6xl mx-auto space-y-16">
        
        {/* Simple, Bold, Elegant Editorial Statement */}
        <FadeIn delay={0.1}>
          <div className="space-y-4 text-center md:text-left">
            <p className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">
              Harrsha Global Insights
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 uppercase leading-none">
              Industrial News & <br />
              Technical Reports
            </h1>
            <p className="text-slate-500 text-sm md:text-base font-normal max-w-xl leading-relaxed pt-2">
              In-depth research and updates covering sustainable metallurgy, high-yield mining geology, premium stone craft, polymer engineering, and real estate layout strategies.
            </p>
            <div className="w-16 h-[2px] bg-slate-900 mt-6 mx-auto md:mx-0" />
          </div>
        </FadeIn>

        {/* 1. One Big Featured Post (Hero Release Layout) */}
        {activeCategory === 'all' && (
          <FadeIn delay={0.15}>
            <div 
              onClick={() => setSelectedPost(featuredPost)}
              className="group relative bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-900 grid lg:grid-cols-12 gap-0 cursor-pointer transition-all duration-500 hover:shadow-slate-200/50 hover:scale-[1.005]"
            >
              {/* Highlight Badge */}
              <div className="absolute top-6 left-6 z-10 bg-white text-slate-950 text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full uppercase flex items-center gap-1 shadow-md">
                <Sparkles size={12} className="text-amber-500 animate-pulse" />
                Featured Release
              </div>

              {/* Image Col */}
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[300px] lg:min-h-[480px] bg-slate-900 overflow-hidden">
                <img 
                  src={featuredPost.imageUrl} 
                  alt={featuredPost.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/90" />
              </div>

              {/* Text Col */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between text-white relative z-10">
                <div className="space-y-4">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">
                    {featuredPost.categoryLabel}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-none group-hover:text-slate-200 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-8 border-t border-slate-900 mt-8 space-y-4">
                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {featuredPost.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {featuredPost.readTime}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-200">
                        {featuredPost.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-bold">{featuredPost.author}</p>
                        <p className="text-[9px] text-slate-500">{featuredPost.authorRole}</p>
                      </div>
                    </div>

                    <button 
                      className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-950 hover:bg-slate-200 font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg group-hover:translate-x-1"
                    >
                      Read Report <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* 2. Category Navigation */}
        <FadeIn delay={0.2}>
          <div className="border-t border-slate-100 pt-10 flex flex-wrap gap-2 items-center justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id 
                    ? 'bg-slate-950 text-white shadow-md' 
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* 3. Normal Feed (Grid of Sourced Articles) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              {activeCategory === 'all' ? 'Latest Publications' : `${categories.find(c => c.id === activeCategory)?.name} Reports`}
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              Showing {feedPosts.length} Articles
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {feedPosts.map((post, idx) => {
                const isBookmarked = bookmarkedIds.includes(post.id);
                return (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    onClick={() => setSelectedPost(post)}
                    className="group flex flex-col justify-between bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300/60 transition-all duration-300 cursor-pointer"
                  >
                    <div>
                      {/* Image Frame */}
                      <div className="aspect-[16/10] relative bg-slate-50 overflow-hidden border-b border-slate-100">
                        <img 
                          src={post.imageUrl} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                        {/* Bookmark indicator */}
                        <button
                          onClick={(e) => toggleBookmark(post.id, e)}
                          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/95 backdrop-blur-sm border border-slate-100 text-slate-500 hover:text-slate-950 transition-colors shadow-sm"
                        >
                          <Bookmark size={14} className={isBookmarked ? "fill-slate-950 text-slate-950" : ""} />
                        </button>
                        
                        {/* Category Label */}
                        <span className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-sm text-white text-[8px] font-bold tracking-widest px-2.5 py-1 rounded-md uppercase">
                          {post.categoryLabel}
                        </span>
                      </div>

                      {/* Info Frame */}
                      <div className="p-6 space-y-3">
                        <div className="flex gap-3 text-[10px] font-mono text-slate-400">
                          <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                        </div>

                        <h3 className="text-base sm:text-lg font-black text-slate-950 uppercase tracking-tight line-clamp-2 leading-snug group-hover:text-slate-800 transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 mt-auto border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-800">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-[10px] font-bold text-slate-700">{post.author}</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-950 group-hover:underline flex items-center gap-1">
                        Read Insights <ChevronRight size={12} />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Newsletter / Custom Inquiry Block */}
        <FadeIn delay={0.35}>
          <div className="border-t border-slate-100 pt-12 pb-8">
            <div className="bg-slate-50 border border-slate-100 p-8 sm:p-12 rounded-2xl grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4 text-center md:text-left">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 block">
                  Keep Informed
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 uppercase tracking-tight leading-none">
                  Subscribe to Technical Briefs
                </h3>
                <p className="text-slate-600 text-sm max-w-xl leading-relaxed">
                  Get certified chemical analyses, global freight updates, and quarterly processing unit performance reports delivered directly to your desk.
                </p>
              </div>

              <div className="md:col-span-5 w-full">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you for subscribing! Our technical updates will be sent to your inbox.");
                  }}
                  className="flex gap-2 max-w-md mx-auto md:ml-auto"
                >
                  <input 
                    type="email" 
                    placeholder="Enter business email" 
                    required
                    className="flex-grow px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-slate-950 transition-all font-mono shadow-sm"
                  />
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-xl text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-sm active:scale-98"
                  >
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>

      {/* 4. Elegant Interactive Lightbox Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col max-h-[90vh]"
            >
              {/* Floating Close Button */}
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-20 bg-slate-100/95 hover:bg-slate-950 hover:text-white text-slate-800 p-2.5 rounded-full transition-all duration-300 cursor-pointer shadow"
                aria-label="Close reader"
              >
                <X size={16} />
              </button>

              <div className="overflow-y-auto flex-grow">
                {/* Hero Image in Modal */}
                <div className="aspect-[21/9] w-full relative bg-slate-100">
                  <img 
                    src={selectedPost.imageUrl} 
                    alt={selectedPost.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 pr-12">
                    <span className="px-2.5 py-1 bg-white text-slate-950 rounded text-[9px] font-bold uppercase tracking-wider">
                      {selectedPost.categoryLabel}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white mt-2 leading-none">
                      {selectedPost.title}
                    </h3>
                  </div>
                </div>

                {/* Reader Contents */}
                <div className="p-8 sm:p-12 grid md:grid-cols-12 gap-10">
                  
                  {/* Left Column: Post Details & Key Takeaways */}
                  <div className="md:col-span-8 space-y-8">
                    {/* Editorial Text */}
                    <div className="space-y-6 text-slate-700 font-light text-sm sm:text-base leading-relaxed">
                      {selectedPost.content.map((para, pIdx) => (
                        <p key={pIdx}>
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Tag list */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                      {selectedPost.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="bg-slate-50 text-slate-500 border border-slate-100 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider font-mono">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Author Card & Bullet Highlights */}
                  <div className="md:col-span-4 space-y-6">
                    {/* Author Widget */}
                    <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block border-b border-slate-200 pb-2">
                        Technical Author
                      </span>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center font-bold text-sm">
                          {selectedPost.author.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-950 uppercase leading-none">{selectedPost.author}</h4>
                          <p className="text-[10px] text-slate-500 font-mono mt-1">{selectedPost.authorRole}</p>
                        </div>
                      </div>
                      <div className="text-[10px] text-slate-400 space-y-1 font-mono pt-2 border-t border-slate-200/50">
                        <p>Published: {selectedPost.date}</p>
                        <p>Reading: {selectedPost.readTime}</p>
                      </div>
                    </div>

                    {/* Key Takeaways Box */}
                    <div className="border border-slate-100 p-6 rounded-2xl space-y-4">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block border-b border-slate-100 pb-2">
                        Key Engineering Takeaways
                      </span>
                      <ul className="space-y-3">
                        {selectedPost.keyTakeaways.map((takeaway, tkIdx) => (
                          <li key={tkIdx} className="flex gap-2.5 text-slate-600 text-[11px] sm:text-xs leading-relaxed font-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>
              </div>

              {/* Reader Footer Control bar */}
              <div className="bg-slate-50 border-t border-slate-100 px-8 py-5 flex items-center justify-between shrink-0">
                <span className="text-[9px] font-bold text-slate-400 tracking-widest font-mono">
                  HARRSHA GLOBAL INSIGHTS
                </span>
                
                <div className="flex items-center gap-4">
                  <Link
                    to="/contact"
                    onClick={() => setSelectedPost(null)}
                    className="px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all"
                  >
                    Submit Sourcing Request
                  </Link>
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="text-xs font-bold text-slate-900 hover:underline cursor-pointer"
                  >
                    Dismiss
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
