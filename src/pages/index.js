import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/header';
import Welcome from '../components/welcome';
import Stories from '../components/stories';
import Footer from '../components/footer';

import '../styles/style.css';

const Home = ({ data }) => {
  const { posts } = data.blog;
  return (<div className="mx-auto md:max-w-screen-lg backdrop-blur backdrop-opacity-70 md:backdrop-filter-none
  md:bg-white shadow-body">
    <Header />
    <Welcome
      description={data.site.siteMetadata.description}
      image={data.welcomeImage.publicURL}
    />
    <Stories posts={posts} />
    <Footer />
  </div>);
};

export const pageQuery = graphql`
query myQueries {
  site {
    siteMetadata {
      title
      description
    }
  }

  welcomeImage: file(base: { eq: "arduino_img_1-.jpeg" }) {
    publicURL
  }

  blog: allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___date] }) {
    posts: nodes {
      fields {
        slug
      }
      frontmatter {
        date(fromNow: true)
        title
        tags
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
}
`

export default Home;