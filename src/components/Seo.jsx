import React from 'react';
import { Title, Meta, Link } from 'react-head';

const Seo = ({ title, description, canonical }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      {description && <Meta name="description" content={description} />}
      {canonical && <Link rel="canonical" href={canonical} />}

      {/* Open Graph (Facebook/LinkedIn) */}
      {title && <Meta property="og:title" content={title} />}
      {description && <Meta property="og:description" content={description} />}
      {canonical && <Meta property="og:url" content={canonical} />}
      <Meta property="og:type" content="website" />

      {/* Twitter Card */}
      {title && <Meta name="twitter:title" content={title} />}
      {description && <Meta name="twitter:description" content={description} />}
      <Meta name="twitter:card" content="summary_large_image" />
    </>
  );
};

export default Seo;



