import { FadeIn } from './FadeIn';
import { ArrowUpRight } from 'lucide-react';

export function FooterCTA() {
  return (
    <div className="px-4 lg:px-8 pb-4 lg:pb-8 pt-12 lg:pt-24 bg-white">
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center rounded-[2.5rem] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-primary">
          <img 
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2000" 
            alt="Timeless Stone Interior"
            className="w-full h-full object-cover opacity-70 mix-blend-overlay grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-10 leading-tight tracking-tight">
              Let's Create<br />Something Timeless
            </h2>
            
            <button className="inline-flex items-center group bg-white text-primary rounded-full pl-8 pr-2 py-2 transition-transform hover:scale-105 mx-auto">
              <span className="font-medium text-sm mr-4">Explore Collection</span>
              <span className="bg-primary text-white rounded-full p-2.5 group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={20} strokeWidth={2} />
              </span>
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
