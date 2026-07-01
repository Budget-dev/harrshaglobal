import { FadeIn } from '../../components/FadeIn';
import { Link } from 'react-router-dom';
import { ChevronRight, Gem, Hammer, Globe, Award } from 'lucide-react';

export function Granite() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&q=80&w=2000" 
                alt="Premium Granite Extraction" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Premium Grade <span className="text-primary/70">Granite</span>
              </h1>
              <p className="text-lg text-primary/70 leading-relaxed mb-8">
                Harrsha Global is a premier supplier of high-grade natural granite. Extracted from our network of certified, ethically operated quarries, our granite offers exceptional strength, distinct veining, and enduring beauty for both domestic and international markets.
              </p>
              <ul className="space-y-4 mb-8">
                {['Direct Quarry Sourcing', 'Custom Cut-to-Size Slabs', 'Global Export Network', 'Rigorous Quality Control'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-primary/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Value Proposition Grid */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">The Harrsha Granite Difference</h2>
              <p className="text-primary/70 max-w-2xl mx-auto">
                Delivering uncompromised quality from raw extraction to final polish.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Gem,
                  title: "Exquisite Selection",
                  desc: "A vast catalog of colors and patterns, ranging from Absolute Black to rare exotic granites."
                },
                {
                  icon: Hammer,
                  title: "Precision Processing",
                  desc: "Advanced multi-blade sawing and automated polishing for flawless surface finishes."
                },
                {
                  icon: Globe,
                  title: "Global Distribution",
                  desc: "Robust logistics network ensuring safe and timely delivery to international destinations."
                },
                {
                  icon: Award,
                  title: "Certified Quality",
                  desc: "Every slab undergoes strict density, water absorption, and compressive strength tests."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Applications Banner */}
          <div className="relative rounded-3xl overflow-hidden bg-primary p-12 lg:p-20 flex flex-col items-center text-center">
            <div className="absolute inset-0 z-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1598306449172-e1d51a660a0b?auto=format&fit=crop&q=80&w=2000" 
                alt="Granite Texture" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Applications Across Sectors</h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Our premium granite slabs are the material of choice for luxury commercial interiors, residential countertops, high-traffic flooring, and monumental exterior cladding.
              </p>
              <button className="px-8 py-3 bg-white text-primary font-bold hover:bg-white/90 transition-colors rounded-full">
                View Granite Catalog
              </button>
            </div>
          </div>

        </FadeIn>
      </div>
    </div>
  );
}
