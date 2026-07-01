import { FadeIn } from './FadeIn';
import { Calendar } from 'lucide-react';

export function Articles() {
  const articles = [
    {
      title: 'The Future of Sustainable Mining and Resource Management',
      desc: "Exploring advanced technologies in resource extraction that minimize environmental footprint while maximizing yield.",
      date: '12 Sep 2025',
      image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Architectural Trends: Natural Stone in Mega-Structures',
      desc: 'How premium granite and natural stone are shaping the skylines and large-scale commercial developments of tomorrow.',
      date: '8 Sep 2025',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl text-center font-medium mb-16 text-primary">
            Articles
          </h2>
        </FadeIn>

        <div className="space-y-12">
          {articles.map((article, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="flex flex-col md:flex-row gap-8 items-center group cursor-pointer">
                <div className="w-full md:w-1/2 aspect-[16/9] overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl md:text-2xl font-medium text-primary mb-3 group-hover:text-primary/70 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-primary/70 text-sm leading-relaxed mb-4">
                    {article.desc}
                  </p>
                  <div className="flex items-center gap-2 text-primary/50 text-sm mb-4">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <span className="inline-block border border-primary text-primary text-xs px-3 py-1 uppercase tracking-wide">
                    Articles
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
