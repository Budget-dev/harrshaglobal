import { FadeIn } from './FadeIn';

export function CategoriesGrid() {
  const categories = [
    { title: 'FURNITURE', image: 'https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&q=80&w=1200' },
    { title: 'BATHROOM', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200' },
    { title: 'STONE SAMPLE', image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&q=80&w=1200' },
    { title: 'CUSTOM FABRICATION', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=1200' }
  ];

  return (
    <section className="w-full bg-background">
      <div className="max-w-[1600px] mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="relative aspect-[16/9] group overflow-hidden cursor-pointer">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-medium tracking-widest text-center px-4 uppercase drop-shadow-md">
                    {cat.title}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
