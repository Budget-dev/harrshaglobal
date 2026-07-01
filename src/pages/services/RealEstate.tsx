import { FadeIn } from '../../components/FadeIn';
import { Link } from 'react-router-dom';
import { ChevronRight, Building2, HardHat, ShieldCheck, Ruler } from 'lucide-react';

export function RealEstate() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Shaping the <span className="text-primary/70">Skylines</span> of Tomorrow
              </h1>
              <p className="text-lg text-primary/70 leading-relaxed mb-8">
                Harrsha Global delivers end-to-end real estate solutions and large-scale infrastructure projects. From visionary planning to precision construction, we build commercial, residential, and industrial properties defined by structural integrity, sustainability, and smart design.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-primary text-white font-medium hover:bg-primary/90 transition-colors rounded-full">
                  Discuss a Project
                </button>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
                alt="Modern Real Estate Infrastructure" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Core Capabilities</h2>
              <p className="text-primary/70 max-w-2xl mx-auto">
                Comprehensive development services tailored to modern architectural demands.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Building2,
                  title: "Commercial Spaces",
                  desc: "State-of-the-art corporate offices, retail complexes, and business parks designed for productivity."
                },
                {
                  icon: HardHat,
                  title: "Industrial Plants",
                  desc: "Heavy-duty manufacturing facilities, warehouses, and logistical hubs with advanced utility integration."
                },
                {
                  icon: ShieldCheck,
                  title: "Quality Assurance",
                  desc: "Rigorous material testing, structural engineering audits, and compliance with international safety codes."
                },
                {
                  icon: Ruler,
                  title: "Urban Planning",
                  desc: "Sustainable master planning, landscaping, and civic infrastructure development."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-primary/5 p-8 rounded-2xl border border-primary/10 hover:bg-primary/10 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-primary/5">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-primary mb-24 flex items-center justify-center">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
              <source src="https://cdn.pixabay.com/video/2019/11/04/28734-371485609_large.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 text-center px-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Engineered for Generations</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                We believe that great infrastructure is the foundation of economic growth. Our projects are built to withstand the test of time, blending aesthetic brilliance with unmatched durability.
              </p>
            </div>
          </div>
          
        </FadeIn>
      </div>
    </div>
  );
}
