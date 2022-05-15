import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/header';
import Welcome from '../components/welcome';
import '../style.css';

const Home = ({ data }) =>
  <div className="Home">
    <Header />
    <Welcome description={data.site.siteMetadata.description} />
  </div>;

export const pageQuery = graphql`
query MetadataQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`

export default Home;