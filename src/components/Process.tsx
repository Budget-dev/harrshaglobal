import { FadeIn } from './FadeIn';

const steps = [
  { num: '01', title: 'Consultation', desc: 'Understanding your unique industrial requirements.' },
  { num: '02', title: 'Planning', desc: 'Strategic sourcing, engineering, and project mapping.' },
  { num: '03', title: 'Production', desc: 'Execution using state-of-the-art facilities.' },
  { num: '04', title: 'Quality Inspection', desc: 'Rigorous testing against global standards.' },
  { num: '05', title: 'Delivery', desc: 'Timely and secure global logistics.' },
];

export function Process() {
  return (
    <section className="py-24 lg:py-32 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-8 bg-accent" />
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">How We Work</span>
              <div className="h-[2px] w-8 bg-accent" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary">
              Our Proven Process
            </h2>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-border" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="up" className="relative text-center lg:text-left">
                {/* Number node */}
                <div className="w-24 h-24 mx-auto lg:mx-0 bg-white border border-border rounded-full flex items-center justify-center text-3xl font-bold text-accent shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-6 relative">
                  {step.num}
                  <div className="absolute inset-2 border-2 border-dashed border-border rounded-full" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-primary/60 text-sm leading-relaxed lg:max-w-[200px]">
                  {step.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
