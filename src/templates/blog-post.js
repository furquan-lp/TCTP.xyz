import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Header from '../components/header';
import Footer from '../components/footer';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <div className="mx-auto md:max-w-screen-lg backdrop-blur backdrop-opacity-70 md:backdrop-filter-none
    md:bg-white shadow-body text-blue-deep">
      <Header />
      <article className="flex flex-col mt-4">
        <section className="font-bold text-3xl md:text-4xl">{post.frontmatter.title}</section>
        <section className="flex justify-between">
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
          className="rounded-lg my-4 shadow shadow-slate-500"
        />
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
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