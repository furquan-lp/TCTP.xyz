import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Header from '../components/header';
import Footer from '../components/footer';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <div className="blog">
      <Header />
      <h1>{post.frontmatter.title}</h1>
      <div className="blog-subtitle">
        <span className="blog-author-date">
          By {post.frontmatter.author} &#183; {post.frontmatter.date}
        </span>
        <span className="blog-tags">
          {post.frontmatter.tags.map(tag =>
            <span className="blog-tag" key={tag.id}>#{tag}</span>
          )}
        </span>
      </div>
      <GatsbyImage
        image={post.frontmatter.banner.childImageSharp.gatsbyImageData}
        className="blog-banner-img"
      />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Footer />
    </div>
  );
};

export const query = graphql`
  query blogQuery($slug: String!) {
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