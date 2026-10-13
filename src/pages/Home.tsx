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
        title="Harrsha Global | Mining, Sponge Iron, Granite & Infrastructure Company in India"
        description="Harrsha Global is a diversified industrial conglomerate in India specializing in iron ore mining, sponge iron, granite, bulletproof sheets & real estate."
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
