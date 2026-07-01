import { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ArrowUpRight } from 'lucide-react';

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <>
      {/* Apple-style Splash Screen */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <h1 className="text-3xl font-bold tracking-widest uppercase text-primary mb-8 animate-pulse">
          HARRSHA
        </h1>
        <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>

      <section className="relative h-[100dvh] min-h-[600px] w-full flex items-end sm:items-center justify-center text-center sm:text-center overflow-hidden pb-12 sm:pb-0">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 bg-black">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <video
            src="https://vennky.sirv.com/Firefly%20Use%20the%20uploaded%20image%20as%20the%20primary%20reference.%20Create%20a%2010-second%20ultra-realistic%204K%20(3840.mp4"
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => setIsVideoLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 w-full max-w-4xl mx-auto px-6">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-6 tracking-wide text-center">
              Building Excellence<br className="sm:hidden" /> Across Industries.
            </h1>
            
            <div className="flex items-center justify-center gap-3 mb-12 text-center max-w-sm mx-auto sm:max-w-none">
              <p className="text-[17px] md:text-xl text-white/90 leading-relaxed max-w-3xl font-light flex items-start justify-center sm:items-center text-center">
                <span className="text-white/50 mr-2 text-2xl leading-none -mt-1 sm:mt-0">...</span>
                <span className="flex-1">From advanced manufacturing and premium granite production to mining operations and real estate development.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              {/* Mobile CTA */}
              <button className="sm:hidden w-full max-w-[340px] flex items-center justify-between bg-white text-primary px-3 pl-8 py-3 rounded-full shadow-lg hover:bg-white/90 transition-colors">
                <span className="font-medium text-[17px] mx-auto text-center flex-1 pr-2">Connect With Us</span>
                <div className="w-12 h-12 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center shrink-0">
                  <ArrowUpRight size={22} strokeWidth={2} />
                </div>
              </button>

              {/* Desktop CTAs */}
              <div className="hidden sm:flex flex-row items-center justify-center gap-4">
                <button className="px-8 py-3 bg-white text-primary font-medium hover:bg-white/90 transition-colors tracking-widest text-sm uppercase rounded-full">
                  View Our Portfolio
                </button>
                <button className="px-8 py-3 border border-white text-white font-medium hover:bg-white hover:text-primary transition-colors tracking-widest text-sm uppercase rounded-full">
                  Connect With Us
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
