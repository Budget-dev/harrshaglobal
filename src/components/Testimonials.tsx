import { FadeIn } from './FadeIn';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Ravi Kumar - Construction Director, Vizag',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150',
      quote: `"Harrsha Global's premium granite transformed our commercial complex in MVP Colony. The rich texture and flawless finish of their marbles are truly unmatched in Visakhapatnam."`
    },
    {
      name: 'Priya Reddy - Chief Architect',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
      quote: `"We sourced exquisite marble for our luxury villa project in Rushikonda. The quality of stone from Harrsha is exceptional, bringing timeless elegance to every space."`
    },
    {
      name: 'Srinivas Rao - Real Estate Developer',
      image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=150',
      quote: `"Partnering with Harrsha for granite supply has been incredible. Their wide selection of durable stones perfectly suited our high-end residential apartments in Seethammadhara."`
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl text-center font-medium mb-16 text-primary">
            What Our Client Say
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {testimonials.map((t, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="flex flex-col items-center">
                <img 
                  src={t.image} 
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-surface"
                />
                <p className="text-primary/80 text-sm leading-relaxed mb-6 font-light">
                  {t.quote}
                </p>
                <h4 className="text-primary font-medium">{t.name}</h4>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
