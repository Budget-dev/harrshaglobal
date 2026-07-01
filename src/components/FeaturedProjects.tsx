import { FadeIn } from './FadeIn';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Skyline Commercial Center',
    category: 'Real Estate & Infrastructure',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    title: 'Defense Ballistic Sheets',
    category: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1 row-span-1'
  },
  {
    title: 'Premium Black Galaxy Granite',
    category: 'Granite Exports',
    image: 'https://images.unsplash.com/photo-1584346857904-7407886a0753?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1 row-span-1'
  },
  {
    title: 'Sustainable Mineral Extraction',
    category: 'Mining',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=1200',
    span: 'col-span-1 md:col-span-2 row-span-1'
  }
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-accent" />
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Featured Work</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                A Legacy of Excellence
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <button className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              View All Projects <ArrowUpRight size={20} />
            </button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, idx) => (
            <FadeIn 
              key={idx} 
              delay={idx * 0.1}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.span}`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
                <div>
                  <span className="text-white/80 font-medium text-sm tracking-wider uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
