import { useEffect } from 'react';
import { AboutUsSection } from '../components/AboutUsSection';
import { SEO } from '../components/SEO';

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="About Us | Company Overview"
        description="Learn more about Harrsha Global, an Indian industrial leader committed to excellence in sponge iron, natural stones, bulletproof glass, and mining."
        url="/about"
      />
      <div className="pt-20 lg:pt-24 min-h-screen">
        <AboutUsSection />
      </div>
    </>
  );
}
