import { FadeIn } from './FadeIn';
import { ArrowRight, Calendar } from 'lucide-react';

const news = [
  {
    title: 'Harrsha Global Expands Manufacturing Capacity for Defense Sector',
    date: 'Oct 15, 2026',
    image: 'https://images.unsplash.com/photo-1565515268482-166f287e0766?auto=format&fit=crop&q=80&w=800',
    category: 'Company News'
  },
  {
    title: 'New Sustainable Mining Initiative Launched in South America',
    date: 'Sep 28, 2026',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=800',
    category: 'Sustainability'
  },
  {
    title: 'Awarded Mega Infrastructure Project in the Middle East',
    date: 'Sep 10, 2026',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    category: 'Infrastructure'
  }
];

export function LatestNews() {
  return (
    <section id="news" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-accent" />
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Insights & Updates</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                Latest News
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <button className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              View All News <ArrowRight size={20} />
            </button>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <article className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:-translate-y-2 transition-transform duration-300 border border-primary/10 cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-primary rounded-full">
                    {item.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-primary/60 text-sm mb-4 font-medium">
                    <Calendar size={16} />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-6 line-clamp-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wide group-hover:text-accent transition-colors">
                    Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
