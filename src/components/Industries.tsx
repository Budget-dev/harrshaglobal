import { FadeIn } from './FadeIn';
import { Building2, Shield, Factory, Tent, Ship, Landmark, HardHat, Warehouse } from 'lucide-react';

const industries = [
  { icon: Shield, name: 'Defense & Security' },
  { icon: HardHat, name: 'Construction' },
  { icon: Building2, name: 'Architecture' },
  { icon: Tent, name: 'Infrastructure' },
  { icon: Ship, name: 'Exports & Logistics' },
  { icon: Landmark, name: 'Government Projects' },
  { icon: Factory, name: 'Industrial Manufacturing' },
  { icon: Warehouse, name: 'Commercial Spaces' },
];

export function Industries() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Industries We Serve
            </h2>
            <p className="text-primary/60 text-lg">
              Providing specialized solutions tailored to the rigorous demands of various sectors worldwide.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {industries.map((ind, idx) => (
            <FadeIn key={idx} delay={idx * 0.05} direction="up">
              <div className="group bg-background hover:bg-primary transition-colors duration-300 rounded-2xl p-6 lg:p-8 text-center flex flex-col items-center justify-center min-h-[200px] border border-primary/10">
                <ind.icon 
                  size={40} 
                  strokeWidth={1.5} 
                  className="text-primary mb-4 group-hover:text-accent transition-colors duration-300" 
                />
                <h3 className="text-lg font-bold text-primary group-hover:text-white transition-colors duration-300">
                  {ind.name}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
