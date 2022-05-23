import React from 'react';
import { graphql, Link } from 'gatsby';

import Header from '../components/header';
import Card from '../components/cards';
import Footer from '../components/footer';

import '../blog.css';

const BigBox = () =>
  <div id="big-box">
    <div id="big-box-title">Stories</div>
  </div>;

export default function Blog({ data }) {
  const { posts } = data.blog;
  return (
    <div className="blog">
      <Header />
      <BigBox />
      <div className="blog-articles">
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
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`