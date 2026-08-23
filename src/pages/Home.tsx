import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { NaturePerfection } from '../components/NaturePerfection';
import { Services } from '../components/Services';
import { FeaturesBanner } from '../components/FeaturesBanner';
import { FullWidthImage } from '../components/FullWidthImage';
import { Testimonials } from '../components/Testimonials';
import { SEO } from '../components/SEO';

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Industrial Manufacturing, Mining & Infrastructure"
        description="Harrsha Global is a premier industrial conglomerate in India, specializing in mining, sponge iron, natural granite, advanced bulletproof polymers, and real estate infrastructure."
        url="/"
      />
      <Hero />
      <NaturePerfection />
      <Services />
      <FeaturesBanner />
      <FullWidthImage />
      <Testimonials />
    </>
  );
}
