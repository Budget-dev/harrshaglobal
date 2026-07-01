import { FadeIn } from './FadeIn';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function NaturePerfection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1598306449172-e1d51a660a0b?auto=format&fit=crop&q=80&w=1000"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-white border-y border-primary/10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between py-8">
            <FadeIn>
              <p className="text-primary/70 text-sm md:text-base leading-relaxed mb-10 lg:mb-32">
                We work with natural stone — marble, granite, travertine, onyx — 
                shaping raw materials into refined forms.<br />
                Each piece tells a story of origin, craftsmanship, and enduring strength.<br />
                Our mission is to reveal the soul of the stone — through balance, texture, and timeless simplicity.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium text-primary leading-[1.1] tracking-tight mb-12">
                Nature.<br />
                Precision.<br />
                Perfection.
              </h2>

              <button className="inline-flex items-center group bg-primary text-white rounded-full pl-8 pr-2 py-2 transition-transform hover:scale-105">
                <span className="font-medium text-sm mr-4">Explore Collection</span>
                <span className="bg-white text-primary rounded-full p-2.5 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={20} strokeWidth={2} />
                </span>
              </button>
            </FadeIn>
          </div>

          {/* Right Images Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
              {/* Image 1 */}
              <div className="min-w-[85%] md:min-w-[60%] lg:min-w-[50%] snap-center">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&q=80&w=1000" 
                    alt="Stone sculpture table"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Image 2 */}
              <div className="min-w-[85%] md:min-w-[60%] lg:min-w-[50%] snap-center">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface">
                  <img 
                    src="https://images.unsplash.com/photo-1598306449172-e1d51a660a0b?auto=format&fit=crop&q=80&w=1000" 
                    alt="Decorative stone sphere"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full">
                    {currentSlide + 1}/{images.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-end gap-4 mt-4 pr-6">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
