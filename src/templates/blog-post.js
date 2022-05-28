import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/header';
import Footer from '../components/footer';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <div className="blog">
      <Header />
      <h1>{post.frontmatter.title}</h1>
      <small>{post.frontmatter.date}</small>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Footer />
    </div>
  );
};

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date (formatString: "MMMM DD, YYYY")
      }
    }
  }
`