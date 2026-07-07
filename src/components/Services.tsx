import { FadeIn } from './FadeIn';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Bulletproof Sheet Manufacturing',
    description: 'Advanced protective sheet manufacturing for defense, industrial safety, and high-security infrastructure.',
    image: 'https://vennky.sirv.com/iron%20spongs/ballari/Microsoft_%20Project%20Silica.jpg',
    link: '/services/bulletproof-sheet-manufacturing'
  },
  {
    title: 'Real Estate & Infrastructure',
    description: 'End-to-end real estate solutions – from planning to construction. We develop residential, commercial, and industrial properties with structural integrity and smart design.',
    image: "https://vennky.sirv.com/iron%20spongs/ballari/Don't%20Just%20List%20It_%20Visualize%20It_.jpg",
    link: '/services/real-estate-infrastructure'
  },
  {
    title: 'Granite',
    description: 'Premium-grade granite extracted from certified quarries. Ideal for domestic use, exports, and commercial interiors.',
    image: 'https://vennky.sirv.com/iron%20spongs/ballari/Granite_%20Building%20Uses%2C%20Attributes%2C%20Price%20And%20Design%20Trends.jpg',
    link: '/services/granite'
  },
  {
    title: 'Mines & Minerals',
    description: 'Sustainable exploration and extraction of essential minerals. We ensure regulatory compliance and ecological responsibility in every project.',
    image: 'https://vennky.sirv.com/iron%20spongs/ballari/%23musuemofnaturalhistory.jpg',
    link: '/services/mines-minerals'
  },
  {
    title: 'Sponge Iron',
    description: 'State-of-the-art 100,000 MT per year direct reduction iron (DRI) plant operating in Anakapalli, Visakhapatnam.',
    image: 'https://vennky.sirv.com/iron%20spongs/WhatsApp%20Image%202026-07-03%20at%207.13.59%20PM.jpeg',
    link: '/services/sponge-iron'
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
              Operating at the highest levels of global industry standards, delivering uncompromising quality across five major sectors.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
