import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
  `);

  return data.site.siteMetadata;
}

export const SEO = ({ title, description, pathname }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata();
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`
  };

  return (
    <>
      <title>{seo.title} | TCTP.xyz</title>
      <meta name="description" content={seo.description} />
      <meta name="url" content={seo.url} />
    </>
  );
};