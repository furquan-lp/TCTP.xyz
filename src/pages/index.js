import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/header';
import Welcome from '../components/welcome';
import { BigCard, Stories } from '../components/stories';
import Footer from '../components/footer';
import { SEO } from '../components/seo';

import '../styles/style.css';

const Home = ({ data }) => {
  const { posts } = data.blog;
  return (
    <div className="md:mx-auto md:max-w-screen-lg bg-mobile-img md:bg-none md:bg-white md:shadow-body
     text-blue-deep">
      <Header />
      <div className="mx-1 md:mx-0">
        <Welcome
          description={data.site.siteMetadata.description}
          image={data.welcomeImage.publicURL}
        />
        <BigCard post={posts[0]} />
        <Stories posts={posts} />
      </div>
      <Footer />
    </div>);
};

export const Head = () => <SEO />;

export const pageQuery = graphql`
query myQueries {
  site {
    siteMetadata {
      title
      description
    }
  }

  welcomeImage: file(base: { eq: "welcome.webp" }) {
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