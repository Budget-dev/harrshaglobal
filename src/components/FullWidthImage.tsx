import { FadeIn } from './FadeIn';

export function FullWidthImage() {
  return (
    <section className="w-full">
      <FadeIn>
        <div className="w-full h-[60vh] min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
          />
        </div>
      </FadeIn>
    </section>
  );
}
