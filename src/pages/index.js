import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/header';
import Welcome from '../components/welcome';
import Stories from '../components/stories';
import '../style.css';

const Home = ({ data }) => {
  const { posts } = data.blog;
  return (<div className="Home">
    <Header />
    <Welcome
      description={data.site.siteMetadata.description}
      image={data.welcomeImage.publicURL}
    />
    <Stories posts={posts.slice().reverse()} />
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

export default Home;