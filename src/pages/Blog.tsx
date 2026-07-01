import { useEffect } from 'react';
import { ArrowRight, Box } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posts = [
    {
      title: 'Build websites in minutes with shadcn/ui',
      excerpt: 'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    },
    {
      title: 'Easily copy code to build your website',
      excerpt: 'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    },
    {
      title: 'The future of web design',
      excerpt: 'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="flex justify-center mb-12">
            <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-gray-600 transition-colors">
              Explore all posts <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden flex flex-col bg-white">
                {/* Image Placeholder */}
                <div className="bg-[#e5e5e5] h-64 w-full flex items-center justify-center">
                  <Box size={80} className="text-[#1a1a1a] opacity-80" strokeWidth={1} />
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-[#1a202c] mb-4">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-gray-600 transition-colors mt-auto">
                    Read more <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
