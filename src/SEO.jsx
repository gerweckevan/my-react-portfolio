import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = 'Evan Gerweck | Full-Stack Developer',
  description = 'Portfolio featuring React, Tailwind, and full-stack projects.',
  canonical = 'https://gerweckevan.github.io/my-portfolio/',
  image = '/thumbnail.png'
}) {
  const fullTitle = title ? `${title}` : 'Evan Gerweck | Full-Stack Developer';
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
