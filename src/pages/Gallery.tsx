import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { FadeIn } from '../components/FadeIn';
import { ChevronRight, Maximize2, X, Filter } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  location: string;
  image: string;
}

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'ALL',
    'MINING & MINERALS',
    'SPONGE IRON & STEEL',
    'GRANITE & NATURAL STONE',
    'BULLETPROOF DEFENSE',
    'REAL ESTATE & INFRASTRUCTURE',
    'SOLAR ENERGY',
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      category: 'MINING & MINERALS',
      title: 'Heavy Excavation Reserves',
      subtitle: 'High-purity calibrated iron ore lump extraction with zero-harm safety standards.',
      location: 'Ballari Reserves, Karnataka',
      image: 'https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM.jpeg',
    },
    {
      id: 'g2',
      category: 'MINING & MINERALS',
      title: 'Dry Screening & Sizing Grid',
      subtitle: 'Automated mechanical screening plants classifying Fe 64.5% calibrated iron ore.',
      location: 'Mineral Processing Hub, Ballari',
      image: 'https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.01%20PM%20(1).jpeg',
    },
    {
      id: 'g3',
      category: 'SPONGE IRON & STEEL',
      title: 'Rotary Kiln DRI Furnace',
      subtitle: 'Direct reduction kilns manufacturing Fe 80%+ metallic content sponge iron.',
      location: 'Steel Reduction Complex, Ballari',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'g4',
      category: 'SPONGE IRON & STEEL',
      title: 'Bulk Metallic Sponge Iron Dispatch',
      subtitle: 'Continuous conveyor systems transferring sponge iron for induction furnaces.',
      location: 'Industrial Dispatch Terminal',
      image: 'https://vennky.sirv.com/iron%20spongs/ballari/WhatsApp%20Image%202026-07-03%20at%207.14.00%20PM.jpeg',
    },
    {
      id: 'g5',
      category: 'GRANITE & NATURAL STONE',
      title: 'Black Galaxy Quarry Operations',
      subtitle: 'Architectural granite extraction utilizing diamond-wire saws for pristine gangsaw blocks.',
      location: 'Chimakkurthy & Prakasam Quarries, AP',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'g6',
      category: 'GRANITE & NATURAL STONE',
      title: 'Precision Multi-Wire Polishing',
      subtitle: 'Automated 16-head polishing lines delivering mirror-finish export granite slabs.',
      location: 'Granite Processing Facility, AP',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'g7',
      category: 'BULLETPROOF DEFENSE',
      title: 'Multi-Layer Ballistic Laminates',
      subtitle: 'Ballistic Level NIJ III & IV security sheets for cash vans, VIP vehicles, and guard posts.',
      location: 'Polymer Manufacturing Unit, Vizag',
      image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'g8',
      category: 'REAL ESTATE & INFRASTRUCTURE',
      title: 'Commercial SEZ Development',
      subtitle: 'Grade-A commercial spaces, IT towers, and gated residential infrastructure.',
      location: 'Rushikonda IT SEZ & Madhurawada, Vizag',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: 'g9',
      category: 'SOLAR ENERGY',
      title: '100-Acre Solar Energy Park',
      subtitle: 'Utility-scale solar power grid providing clean, sustainable industrial energy.',
      location: 'Solar Grid Site, Andhra Pradesh',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=1200',
    },
  ];

  const filteredItems = activeCategory === 'ALL'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.harrshaglobal.com/' },
    { name: 'Industrial Gallery', url: 'https://www.harrshaglobal.com/gallery' },
  ];

  return (
    <>
      <SEO
        title="Industrial Gallery & Project Media | Harrsha Global"
        description="Explore photographic documentation of Harrsha Global mining reserves, sponge iron manufacturing kilns, granite quarries, and defense composite plants."
        url="/gallery"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ImageGallery',
          name: 'Harrsha Global Industrial Photo Gallery',
          url: 'https://www.harrshaglobal.com/gallery',
          description: 'Photographic documentation of Harrsha Global industrial sites across India.',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbs.map((b, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: b.name,
              item: b.url,
            })),
          },
        }}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-28 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
            <Link to="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-800 font-semibold">Industrial Gallery</span>
          </nav>

          {/* Header */}
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Operations & Facilities
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1530] tracking-tight mb-4">
              Harrsha Global Industrial Gallery
            </h1>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-light">
              Visual documentation of our heavy mining concessions, sponge iron rotary kilns, granite dimensional stone quarries, ballistic sheet fabrication, and real estate master projects.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0B1530] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className="group relative bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.category} Harrsha Global`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                      <Maximize2 size={14} /> Expand High-Resolution View
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 bg-[#0B1530]/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#0B1530] group-hover:text-blue-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                    📍 {item.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm" onClick={() => setLightboxItem(null)}>
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X size={18} />
            </button>
            <img
              src={lightboxItem.image}
              alt={lightboxItem.title}
              className="w-full max-h-[70vh] object-contain bg-slate-950"
            />
            <div className="p-6 bg-white">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">{lightboxItem.category}</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">{lightboxItem.title}</h3>
              <p className="text-xs text-slate-600 mt-1">{lightboxItem.subtitle}</p>
              <p className="text-xs text-slate-400 mt-2">📍 {lightboxItem.location}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
