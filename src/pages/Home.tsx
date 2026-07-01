import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { NaturePerfection } from '../components/NaturePerfection';
import { Services } from '../components/Services';
import { FeaturesBanner } from '../components/FeaturesBanner';
import { FullWidthImage } from '../components/FullWidthImage';
import { Testimonials } from '../components/Testimonials';
import { Articles } from '../components/Articles';

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <NaturePerfection />
      <Services />
      <FeaturesBanner />
      <FullWidthImage />
      <Testimonials />
      <Articles />
    </>
  );
}
