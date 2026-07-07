import { FadeIn } from './FadeIn';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function NaturePerfection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const verticalImages = [
    {
      title: 'Bulletproof Sheet Manufacturing',
      url: 'https://vennky.sirv.com/iron%20spongs/ballari/Microsoft_%20Project%20Silica.jpg'
    },
    {
      title: 'Real Estate & Infrastructure',
      url: "https://vennky.sirv.com/iron%20spongs/ballari/Don't%20Just%20List%20It_%20Visualize%20It_.jpg"
    },
    {
      title: 'Granite Processing & Slabs',
      url: 'https://vennky.sirv.com/iron%20spongs/ballari/Granite_%20Building%20Uses%2C%20Attributes%2C%20Price%20And%20Design%20Trends.jpg'
    },
    {
      title: 'Mines & Minerals Exploration',
      url: 'https://vennky.sirv.com/iron%20spongs/ballari/%23musuemofnaturalhistory.jpg'
    },
    {
      title: 'Sponge Iron Rotary Kiln',
      url: 'https://vennky.sirv.com/iron%20spongs/WhatsApp%20Image%202026-07-03%20at%207.13.59%20PM.jpeg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === verticalImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? verticalImages.length - 1 : prev - 1));
  };

  const slide1 = verticalImages[currentSlide];
  const slide2 = verticalImages[(currentSlide + 1) % verticalImages.length];

  return (
    <section className="py-24 bg-white border-y border-primary/10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between py-8">
            <FadeIn>
              <p className="text-primary/70 text-sm md:text-base leading-relaxed mb-10 lg:mb-32">
                Harrshaglobal works with high-integrity materials — polycarbonate laminates, premium black and blue granite, industrial non-coking coal, and iron ore — shaping raw resources into refined forms.<br /><br />
                Each sector represents our core values of durability, expert engineering, and enduring strength. Our mission is to scale global supply with absolute precision and simplicity.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium text-primary leading-[1.1] tracking-tight mb-12">
                Nature.<br />
                Precision.<br />
                Perfection.
              </h2>

              <Link 
                to="/portfolio" 
                className="inline-flex items-center group bg-primary text-white rounded-full pl-8 pr-2 py-2 transition-transform hover:scale-105 w-fit"
              >
                <span className="font-medium text-sm mr-4">Explore Collection</span>
                <span className="bg-white text-primary rounded-full p-2.5 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={20} strokeWidth={2} />
                </span>
              </Link>
            </FadeIn>
          </div>

          {/* Right Images Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
              {/* Image 1 */}
              <div className="min-w-[85%] md:min-w-[60%] lg:min-w-[50%] snap-center">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group shadow-lg">
                  <img 
                    src={slide1.url} 
                    alt={slide1.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-6 flex flex-col justify-end">
                    <span className="text-xs bg-primary text-white px-3 py-1 rounded-full font-semibold w-fit mb-2 tracking-wider">
                      Active Vertical
                    </span>
                    <h3 className="text-white text-lg font-bold">{slide1.title}</h3>
                  </div>
                </div>
              </div>
              
              {/* Image 2 */}
              <div className="min-w-[85%] md:min-w-[60%] lg:min-w-[50%] snap-center">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface group shadow-lg">
                  <img 
                    src={slide2.url} 
                    alt={slide2.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-6 flex flex-col justify-end">
                    <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full font-semibold w-fit mb-2 tracking-wider">
                      Up Next
                    </span>
                    <h3 className="text-white text-lg font-bold">{slide2.title}</h3>
                  </div>
                  <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full font-mono font-bold tracking-wider">
                    {currentSlide + 1} / {verticalImages.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-end gap-4 mt-4 pr-6">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer"
                title="Previous Image"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-all cursor-pointer"
                title="Next Image"
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
