import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/header';
import Welcome from '../components/welcome';
import '../style.css';

const Home = ({ data }) =>
  <div className="Home">
    <Header />
    <Welcome
      description={data.site.siteMetadata.description}
      image={data.welcomeImage.publicURL}
    />
  </div>;

export const pageQuery = graphql`
query MetadataQuery {
  site {
    siteMetadata {
      title
      description
    }
  }

  welcomeImage: file(base: { eq: "arduino_img_1-.jpeg" }) {
    publicURL
  }
}
`

export default Home;