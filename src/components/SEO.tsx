import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  name?: string;
  type?: string;
  url?: string;
  image?: string;
  schema?: object | object[];
}

export function SEO({ 
  title, 
  description = 'Harrsha Global Private Limited is an Indian diversified industrial group operating in mining, sponge iron, granite, bulletproof sheets, and real estate infrastructure.', 
  name = 'Harrsha Global', 
  type = 'website', 
  url = '', 
  image = 'https://www.harrshaglobal.com/og-image.jpg', 
  schema 
}: SEOProps) {
  // Ensure title has proper brand attribution without duplication
  const cleanTitle = title.toLowerCase().includes('harrsha global')
    ? title
    : `${title} | Harrsha Global`;

  // Standardize canonical to https://www.harrshaglobal.com
  const cleanPath = url ? (url.startsWith('/') ? url : `/${url}`) : '';
  const canonicalUrl = cleanPath === '' || cleanPath === '/' 
    ? 'https://www.harrshaglobal.com/' 
    : `https://www.harrshaglobal.com${cleanPath.replace(/\/$/, '')}`;

  // Organization structured data (Root Schema.org)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.harrshaglobal.com/#organization',
    name: 'Harrsha Global',
    legalName: 'Harrsha Global Private Limited',
    alternateName: ['Harrsha Global', 'Harsha Global', 'Harrshaglobal Pvt Ltd'],
    url: 'https://www.harrshaglobal.com/',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.harrshaglobal.com/favicon.svg',
      width: '512',
      height: '512'
    },
    description: 'Harrsha Global Private Limited is a diversified industrial conglomerate based in India specializing in iron ore mining, sponge iron production, granite quarrying, bulletproof composite manufacturing, and real estate infrastructure.',
    email: 'info@harrshaglobal.com',
    telephone: '+91 9491750999',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Muralinagar, Kancharapalem, Rushikonda IT SEZ',
      addressLocality: 'Visakhapatnam',
      addressRegion: 'Andhra Pradesh',
      postalCode: '530007',
      addressCountry: 'IN'
    },
    sameAs: [
      'https://www.linkedin.com/company/harrsha-global',
      'https://www.facebook.com/harrshaglobal',
      'https://www.instagram.com/harrshaglobal',
      'https://twitter.com/harrshaglobal'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91 9491750999',
        contactType: 'customer service',
        areaServed: ['IN', 'AE', 'US', 'GB', 'SG'],
        availableLanguage: ['English', 'Telugu', 'Hindi']
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91 73967 34389',
        contactType: 'sales',
        areaServed: ['IN', 'International'],
        availableLanguage: ['English', 'Telugu', 'Hindi']
      }
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.harrshaglobal.com/#website',
    url: 'https://www.harrshaglobal.com/',
    name: 'Harrsha Global',
    alternateName: 'Harsha Global',
    description: 'Harrsha Global official portal for mining, sponge iron, granite, bulletproof composites, and infrastructure.',
    publisher: {
      '@id': 'https://www.harrshaglobal.com/#organization'
    }
  };

  // Compile all schemas
  const schemasToRender = Array.isArray(schema) 
    ? [organizationSchema, websiteSchema, ...schema]
    : schema 
    ? [organizationSchema, websiteSchema, schema]
    : [organizationSchema, websiteSchema];

  return (
    <Helmet>
      {/* Standard SEO Metadata */}
      <title>{cleanTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Harrsha Global Private Limited" />
      <meta name="geo.region" content="IN-AP" />
      <meta name="geo.placename" content="Visakhapatnam" />

      {/* Open Graph Tags */}
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={cleanTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${cleanTitle} - Harrsha Global`} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@harrshaglobal" />
      <meta name="twitter:title" content={cleanTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {schemasToRender.map((s, idx) => (
        <script key={`schema-${idx}`} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
