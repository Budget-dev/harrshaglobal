import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';
import { ArrowUpRight, ShieldCheck, Factory, Building2, Pickaxe } from 'lucide-react';
import Globe from './ui/globe';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Define premium trade route coordinates for HARRSHA GLOBAL
  const markers = [
    { id: 'india', location: [15.1394, 76.9214] as [number, number], label: 'HQ - India' },
    { id: 'usa', location: [40.7128, -74.0060] as [number, number], label: 'USA' },
    { id: 'dubai', location: [25.2048, 55.2708] as [number, number], label: 'Dubai' },
    { id: 'singapore', location: [1.3521, 103.8198] as [number, number], label: 'Singapore' },
    { id: 'uk', location: [51.5074, -0.1278] as [number, number], label: 'London' }
  ];

  const arcs = [
    { id: 'arc-1', from: [15.1394, 76.9214] as [number, number], to: [40.7128, -74.0060] as [number, number], label: 'Trade Link' },
    { id: 'arc-2', from: [15.1394, 76.9214] as [number, number], to: [25.2048, 55.2708] as [number, number] },
    { id: 'arc-3', from: [15.1394, 76.9214] as [number, number], to: [1.3521, 103.8198] as [number, number] },
    { id: 'arc-4', from: [15.1394, 76.9214] as [number, number], to: [51.5074, -0.1278] as [number, number] }
  ];

  return (
    <>
      {/* Premium Corporate Splash Screen */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F5F7FA] transition-opacity duration-1000 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <h1 className="text-2xl font-semibold tracking-widest uppercase text-slate-900 mb-6 font-sans">
          HARRSHA GLOBAL
        </h1>
        <div className="w-8 h-8 border-2 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
      </div>

      <section className="relative min-h-screen w-full flex items-center justify-center bg-slate-950 text-white overflow-hidden pt-[88px] md:pt-[110px] pb-12 md:pb-20">
        
        {/* Full-Bleed Background Video with Dark Overlay - Only on Mobile */}
        <div className="block md:hidden absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <video 
            src="https://vennky.sirv.com/Firefly%20Create%20a%20premium%204K%20vertical%20(9-16)%20cinematic%20animation%20for%20a%20modern%20global%20architecture%20and.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/55 backdrop-blur-[0.5px]" />
        </div>

        {/* Subtle glow / light highlights on the right behind the globe */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute right-[5%] top-[40%] w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center min-h-[calc(100vh-110px)]">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center py-4 w-full">
            
            {/* Left Content Column (60% width) */}
            <div className="lg:col-span-8 xl:col-span-8 text-left flex flex-col justify-center py-4 z-20">
              <FadeIn>
                {/* Accent line above heading */}
                <div className="w-12 h-[3px] bg-blue-500 mb-6 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]" />

                {/* Company Name */}
                <p className="text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase mb-3 font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  Harrsha Global Pvt. Ltd.
                </p>
                
                {/* Main Heading */}
                <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-5 font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  Building India's Future<br />
                  <span className="text-blue-400">Through Resources, Infrastructure & Industry</span>
                </h1>
                
                {/* Subheading */}
                <p className="text-sm md:text-base text-slate-200 font-normal leading-relaxed max-w-2xl mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
                  Harrsha Global Pvt. Ltd. is a diversified enterprise with interests in mining, minerals, infrastructure, real estate, manufacturing, and industrial development, delivering sustainable growth and long-term value.
                </p>
                
                {/* Business Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 md:mb-10 max-w-3xl text-left">
                  {/* Highlight 1 */}
                  <div className="bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-md p-4 rounded-xl transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-500/15 rounded-lg text-blue-400 shrink-0">
                        <Pickaxe size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                          Mining & Mineral Resources
                        </h4>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          Iron Ore, Coal, Manganese, Gold, Silver, Diamonds, Water Resources, and Strategic Minerals.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlight 2 */}
                  <div className="bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-md p-4 rounded-xl transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-500/15 rounded-lg text-blue-400 shrink-0">
                        <Building2 size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                          Infrastructure & Real Estate
                        </h4>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          Large-scale projects focused on growth, modernization, and structural engineering excellence.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlight 3 */}
                  <div className="bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-md p-4 rounded-xl transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-500/15 rounded-lg text-blue-400 shrink-0">
                        <Factory size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                          Industrial Manufacturing
                        </h4>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          State-of-the-art Mini Steel Plants and Direct Reduction (Sponge Iron) Production facilities.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlight 4 */}
                  <div className="bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-md p-4 rounded-xl transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-500/15 rounded-lg text-blue-400 shrink-0">
                        <ShieldCheck size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                          Advanced Material Solutions
                        </h4>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          Innovative Bulletproof Stone-to-Fabric Technology and specialized high-security products.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Premium Corporate Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="#services"
                    onClick={handleScrollToServices}
                    className="group px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-[0_4px_14px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.6)] rounded-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                  >
                    Explore Our Businesses
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <Link 
                    to="/contact"
                    className="group px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 hover:border-white/40 rounded-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] backdrop-blur-sm"
                  >
                    Contact Us
                    <ArrowUpRight size={14} className="opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Desktop version: 3D Interactive WebGL Globe (40% width, cropped outside) */}
            <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-[150px] md:-right-[200px] lg:-right-[220px] xl:-right-[250px] w-[420px] h-[420px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] z-10 pointer-events-none md:pointer-events-auto select-none items-center justify-center">
              <FadeIn delay={0.25} className="w-full h-full">
                <div className="relative w-full h-full">
                  {/* Subtle vector connections surrounding the globe */}
                  <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(37,99,235,0.06)" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(37,99,235,0.04)" strokeWidth="0.5" strokeDasharray="2 4" />
                    </svg>
                  </div>

                  {/* 3D WebGL Globe with blue color scheme */}
                  <div className="w-full h-full">
                    <Globe 
                      markers={markers} 
                      arcs={arcs} 
                      className="w-full h-full"
                      dark={0}
                      baseColor={[0.1, 0.45, 0.9]}  // Deep blue digital globe color
                      markerColor={[0.0, 0.7, 0.5]} // Bright teal active nodes
                      arcColor={[0.2, 0.55, 1.0]}   // Flowing electrical blue connection arcs
                      glowColor={[0.92, 0.95, 0.99]} // Light atmospheric glow
                      mapBrightness={11}
                      markerSize={0.032}
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
