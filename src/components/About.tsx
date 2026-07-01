import { FadeIn } from './FadeIn';
import { AnimatedCounter } from './AnimatedCounter';

export function About() {
  const stats = [
    { value: 20, suffix: '+', label: 'Years Experience' },
    { value: 150, suffix: '+', label: 'Projects' },
    { value: 40, suffix: '+', label: 'Countries Served' },
    { value: 1000, suffix: '+', label: 'Clients' },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=1000" 
                  alt="Industrial Facility" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white text-primary p-10 rounded-2xl shadow-2xl hidden md:block border border-primary/10">
                <div className="text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter value={20} suffix="+" />
                </div>
                <div className="text-lg font-medium text-primary/80">Years of Industrial<br/>Excellence</div>
              </div>
            </div>
          </FadeIn>

          {/* Content Side */}
          <div>
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-accent" />
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">About The Company</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Global Leaders in Industrial Manufacturing & Development
              </h2>
              <p className="text-primary/70 text-lg mb-8 leading-relaxed">
                We are committed to delivering world-class solutions across diverse sectors. 
                From state-of-the-art bulletproof manufacturing to monumental infrastructure 
                projects and premium natural stone exports, Harrsha Global stands as a beacon 
                of quality, trust, and innovation on the global stage.
              </p>
              
              <p className="text-primary/70 text-lg mb-12 leading-relaxed">
                Our legacy is built on a foundation of sustainable practices, modern engineering, 
                and an unwavering dedication to exceeding global standards.
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                {stats.map((stat, idx) => (
                  <div key={idx} className="relative">
                    <div className="text-4xl font-bold text-primary mb-2">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm font-semibold text-primary/60 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
