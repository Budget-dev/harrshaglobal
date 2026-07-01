import { FadeIn } from './FadeIn';
import { Settings, Home, Wrench, Users } from 'lucide-react';

export function FeaturesBanner() {
  const features = [
    { icon: Settings, desc: 'Advanced manufacturing techniques driving precision and efficiency in every product.' },
    { icon: Home, desc: 'Large-scale real estate and infrastructure development redefining modern skylines.' },
    { icon: Wrench, desc: 'Reliable supply chains and logistics ensuring seamless global distribution.' },
    { icon: Users, desc: 'A dedicated workforce committed to innovation, safety, and sustainable practices.' },
  ];

  return (
    <section className="bg-white text-primary py-16 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {features.map((feature, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} direction="up">
              <div className="flex flex-col items-center">
                <feature.icon className="w-10 h-10 mb-6 text-primary" strokeWidth={1.5} />
                <p className="text-sm text-primary/80 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
