import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';

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

      <section className="relative min-h-[85vh] md:min-h-screen w-full flex items-center bg-white text-slate-900 overflow-hidden pt-[88px] md:pt-[110px] pb-12 md:pb-20">
        
        {/* Full-Bleed Background Video matching the reference exactly */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <video 
            src="https://vennky.sirv.com/I_need_this_video__With_a.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-right md:object-center opacity-100"
          />
        </div>

        {/* Dynamic decorative light blur behind content */}
        <div className="absolute left-0 top-1/4 w-[300px] h-[300px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center py-8">
          <div className="max-w-xl md:max-w-2xl text-left">
            <FadeIn delay={0.15}>
              {/* Header/Company Name */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-wide text-[#0F172A] mb-6 uppercase font-sans leading-[1.05]">
                HARRSHAGLOBAL <br />
                PVT LTD
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              {/* Main Subheading */}
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-slate-800 leading-[1.25] mb-6 max-w-md md:max-w-lg">
                Connecting Global <br />
                Resources, <br />
                Engineering <br />
                Sustainable <br />
                Excellence
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              {/* Pill Button */}
              <a 
                href="#services"
                onClick={handleScrollToServices}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-50/80 hover:bg-blue-100/95 text-blue-900 font-bold tracking-wider rounded-xl shadow-[0_4px_14px_rgba(59,130,246,0.12)] border border-blue-200/60 hover:border-blue-300 text-xs sm:text-sm uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-md"
              >
                Explore Our Sectors <span className="text-lg leading-none">→</span>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

