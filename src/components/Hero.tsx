import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { ArrowUpRight } from 'lucide-react';
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

      <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#F5F7FA] via-[#FAFAFC] to-[#FFFFFF] text-slate-900 overflow-hidden pt-[80px] pb-12">
        
        {/* Subtle glow / light highlights on the right behind the globe */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute right-[5%] top-[40%] w-[400px] h-[400px] bg-sky-200/20 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center min-h-[calc(100vh-80px)]">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center py-4 w-full">
            
            {/* Left Content Column (60% width) */}
            <div className="lg:col-span-7 xl:col-span-7 text-left flex flex-col justify-center py-4 z-20">
              <FadeIn>
                {/* Accent line above heading */}
                <div className="w-12 h-[3px] bg-blue-600 mb-6 rounded-full" />

                {/* Company Name */}
                <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase mb-3 font-sans">
                  HARRSHA GLOBAL PVT LTD
                </p>
                
                {/* Main Subtitle */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-5 font-sans">
                  Connecting Global Resources,<br />
                  <span className="text-slate-800">
                    Engineering & Sustainable Growth.
                  </span>
                </h1>
                
                {/* Description Text */}
                <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-xl mb-8">
                  Delivering excellence across manufacturing, infrastructure, mining, granite, and global trade through innovation, reliability, and long-term partnerships.
                </p>
                
                {/* Premium Corporate Button */}
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <a 
                    href="#services"
                    onClick={handleScrollToServices}
                    className="group px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] rounded-lg inline-flex items-center justify-center gap-2.5 text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Explore Our Sectors
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: 3D Interactive WebGL Globe (40% width, cropped outside) */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-[150px] md:-right-[200px] lg:-right-[220px] xl:-right-[250px] w-[420px] h-[420px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] z-10 pointer-events-none md:pointer-events-auto select-none flex items-center justify-center">
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
