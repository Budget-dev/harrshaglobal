import { useEffect } from 'react';
import { AboutUsSection } from '../components/AboutUsSection';

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 lg:pt-24 min-h-screen">
      <AboutUsSection />
    </div>
  );
}
