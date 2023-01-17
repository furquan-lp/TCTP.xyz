import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/header';
import Welcome from '../components/welcome';
import { BigCard, Stories } from '../components/stories';
import Footer from '../components/footer';
import Head from '../components/head';

import '../styles/style.css';

const Home = ({ data }) => {
  const { posts } = data.blog;
  return (
    <div className="mx-auto md:max-w-screen-lg md:bg-white md:shadow-body text-blue-deep">
      <Head title="The Chip Tinker Project" />
      <Header />
      <Welcome
        description={data.site.siteMetadata.description}
        image={data.welcomeImage.publicURL}
      />
      <BigCard post={posts[0]} />
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

  welcomeImage: file(base: { eq: "welcome.jpeg" }) {
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