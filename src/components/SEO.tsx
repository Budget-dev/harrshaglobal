import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  name?: string;
  type?: string;
  url?: string;
  image?: string;
  schema?: object;
}

export function SEO({ 
  title, 
  description = 'Harrsha Global is a diversified industrial conglomerate operating in mining, sponge iron, granite, bulletproof sheet manufacturing, and real estate infrastructure across India and internationally.', 
  name = 'Harrsha Global', 
  type = 'website', 
  url = '', 
  image = 'https://harrshaglobal.com/og-image.jpg', 
  schema 
}: SEOProps) {
  const fullTitle = `${title} | Harrsha Global`;
  const fullUrl = `https://harrshaglobal.com${url}`;

  const defaultOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Harrsha Global",
    "url": "https://harrshaglobal.com",
    "logo": "https://harrshaglobal.com/logo.png",
    "description": "Harrsha Global is a diversified industrial conglomerate operating in mining, sponge iron, granite, bulletproof sheet manufacturing, and real estate infrastructure across India and internationally.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Visakhapatnam",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 94817 56999",
      "contactType": "customer service"
    }
  };

  const currentSchema = schema || defaultOrganizationSchema;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={fullUrl} />

      {/* Open Graph tags */}
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={type} />
      <meta property='og:url' content={fullUrl} />
      <meta property='og:site_name' content={name} />
      {image && <meta property='og:image' content={image} />}

      {/* Twitter tags */}
      <meta name='twitter:creator' content={name} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      {image && <meta name='twitter:image' content={image} />}

      {/* Schema.org structured data */}
      {currentSchema && (
        <script type="application/ld+json">
          {JSON.stringify(currentSchema)}
        </script>
      )}
    </Helmet>
  );
}
