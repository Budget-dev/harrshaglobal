import { FadeIn } from './FadeIn';
import { ShieldCheck, Globe2, Leaf, Clock, Settings, Users } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: 'Premium Quality', desc: 'Uncompromising standards in every product and project we deliver.' },
  { icon: Globe2, title: 'Global Standards', desc: 'Adhering to international certifications and best practices.' },
  { icon: Leaf, title: 'Sustainable Practices', desc: 'Environmentally conscious extraction and manufacturing processes.' },
  { icon: Clock, title: 'Timely Delivery', desc: 'Punctual execution and logistics across all our global operations.' },
  { icon: Settings, title: 'Modern Manufacturing', desc: 'State-of-the-art facilities equipped with advanced technology.' },
  { icon: Users, title: 'Experienced Team', desc: 'Industry veterans and skilled professionals driving excellence.' },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-y border-primary/10">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current text-primary">
          <polygon points="100,0 0,100 100,100" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-1">
            <FadeIn>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-primary" />
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Why Choose Us</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                The Harrsha Advantage
              </h2>
              <p className="text-primary/70 text-lg leading-relaxed mb-8">
                We combine decades of industrial expertise with modern innovation to deliver solutions that are not just effective, but extraordinary. Partnering with us means choosing reliability, scale, and uncompromising quality.
              </p>
              <button className="px-8 py-4 border border-primary/20 text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all">
                Download Profile
              </button>
            </FadeIn>
          </div>

          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <FadeIn key={idx} delay={idx * 0.1} direction="up">
                  <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 hover:bg-primary/10 transition-colors group">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="text-primary" size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                    <p className="text-primary/60 leading-relaxed text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
