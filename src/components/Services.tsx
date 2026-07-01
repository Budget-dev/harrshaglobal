import { FadeIn } from './FadeIn';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Bulletproof Sheet Manufacturing',
    description: 'Advanced protective sheet manufacturing for defense, industrial safety, and high-security infrastructure.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    link: '/services/bulletproof-sheet-manufacturing'
  },
  {
    title: 'Real Estate & Infrastructure',
    description: 'End-to-end real estate solutions – from planning to construction. We develop residential, commercial, and industrial properties with structural integrity and smart design.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    link: '/services/real-estate-infrastructure'
  },
  {
    title: 'Granite',
    description: 'Premium-grade granite extracted from certified quarries. Ideal for domestic use, exports, and commercial interiors.',
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&q=80&w=800',
    link: '/services/granite'
  },
  {
    title: 'Mines & Minerals',
    description: 'Sustainable exploration and extraction of essential minerals. We ensure regulatory compliance and ecological responsibility in every project.',
    image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&q=80&w=800',
    link: '/services/mines-minerals'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-8 bg-accent" />
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Our Verticals</span>
              <div className="h-[2px] w-8 bg-accent" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Diversified Industrial Excellence
            </h2>
            <p className="text-primary/70 text-lg">
              Operating at the highest levels of global industry standards, delivering uncompromising quality across four major sectors.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <Link to={service.link} className="group relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer block">
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
