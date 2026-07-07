import { FadeIn } from '../../components/FadeIn';
import { Link } from 'react-router-dom';
import { ChevronRight, Mountain, Pickaxe, Leaf, HardHat } from 'lucide-react';

export function MinesMinerals() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          {/* Hero Section */}
          <div className="relative rounded-3xl overflow-hidden mb-20 bg-primary">
            <div className="absolute inset-0">
              <img 
                src="https://vennky.sirv.com/iron%20spongs/ballari/%23musuemofnaturalhistory.jpg" 
                alt="Mines & Minerals Exploration" 
                className="w-full h-full object-cover opacity-60 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
            </div>
            
            <div className="relative z-10 max-w-3xl p-12 lg:p-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Sustainable <span className="text-white/70">Mining & Exploration</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl">
                Harrsha Global leads in the responsible extraction and processing of essential industrial minerals. We balance industrial advancement with ecological stewardship, utilizing advanced technologies to maximize yield while minimizing environmental impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-white text-primary font-bold hover:bg-white/90 transition-colors rounded-full">
                  Partner With Us
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-colors rounded-full">
                  View Resource Portfolio
                </button>
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Operational Excellence</h2>
              <p className="text-primary/70 max-w-2xl mx-auto">
                Comprehensive mineral resource management from geological surveying to refined distribution.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Pickaxe,
                  title: "Resource Extraction",
                  desc: "Utilizing precision blasting, advanced heavy machinery, and data-driven surveying to extract high-value minerals efficiently."
                },
                {
                  icon: Leaf,
                  title: "Ecological Responsibility",
                  desc: "Strict adherence to environmental regulations, implementing progressive mine rehabilitation and water recycling systems."
                },
                {
                  icon: Mountain,
                  title: "Geological Surveying",
                  desc: "Deploying geospatial mapping, core sampling, and 3D modeling to accurately assess mineral deposits and plan safe extraction."
                },
                {
                  icon: HardHat,
                  title: "Workforce Safety",
                  desc: "Maintaining zero-harm protocols, providing continuous safety training, and deploying automated monitoring systems in active zones."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-colors bg-white">
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex-shrink-0 flex items-center justify-center">
                    <item.icon className="text-primary" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-primary/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </FadeIn>
      </div>
    </div>
  );
}
