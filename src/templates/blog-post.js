import React from 'react';

import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { Disqus } from 'gatsby-plugin-disqus';

import Header from '../components/header';
import Footer from '../components/footer';
import { SEO } from '../components/seo';

deckDeckGoHighlightElement();

export default function BlogPost({ location, data }) {
  const post = data.markdownRemark;
  const attribs = [{
    attriblink: "https://www.vecteezy.com/",
    attrib: "Vectors by Vecteezy.com"
  }];

  return (
    <div className="mx-auto md:max-w-screen-lg bg-mobile-img md:bg-none md:bg-white md:shadow-body text-blue-deep">
      <Header />
      <article className="flex flex-col mt-4 mx-1 md:mx-0">
        <section className="font-bold text-3xl md:text-4xl border-b">{post.frontmatter.title}</section>
        <section className="flex justify-between mt-1 md:mt-2 text-sm md:text-base">
          <span className="text-blue-dark">
            By {post.frontmatter.author} &#183; {post.frontmatter.date}
          </span>
          <span className="text-red-new font-bold">
            {post.frontmatter.tags.map(tag =>
              <span className="m-1" key={tag.id}>#{tag}</span>
            )}
          </span>
        </section>
        <GatsbyImage
          image={post.frontmatter.banner.childImageSharp.gatsbyImageData}
          className="rounded-lg my-4 shadow shadow-slate-400"
        />
        <section className="article-blog-post" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <Disqus
        config={{
          url: `${data.site.siteMetadata.siteUrl + location.pathname}`,
          identifier: post.id,
          title: data.site.siteMetadata.title,
        }}
      />
      <Footer attribs={attribs} />
    </div>
  );
};

export const Head = ({ data: { markdownRemark }, location }) =>
  <SEO title={markdownRemark.frontmatter.title} pathname={location.pathname} />;

export const query = graphql`
  query blogQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date (formatString: "MMMM DD, YYYY")
        author
        tags
        banner {
          childImageSharp {
            gatsbyImageData(width: 1024, height: 450)
          }
        }
      }
    }
  }
`