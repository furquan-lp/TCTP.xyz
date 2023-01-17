import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/header';
import Card from '../components/cards';
import Footer from '../components/footer';
import Head from '../components/head';

import '../styles/blog.css';

const BigBox = () =>
  <div id="big-box">
    <div id="big-box-title">Stories</div>
  </div>;

export default function Blog({ data }) {
  const { posts } = data.blog;
  return (
    <div className="mx-auto md:max-w-screen-lg bg-mobile-img md:bg-none md:bg-white md:shadow-body text-blue-deep">
      <Head title="Blog" />
      <Header />
      <BigBox />
      <div className="flex flex-row flex-wrap justify-center">
        {posts.map(post => (
          <Card key={post.id} post={post} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___date] }) {
    posts: nodes {
        fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 450)
          }
        }
      }
      excerpt
      id
    }
  }
}`
