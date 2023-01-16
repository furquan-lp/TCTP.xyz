import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => {
  return (
    <>
      <Helmet
        defaultTitle="The Chip Tinker Project | TCTP.xyz"
        title={title}
        titleTemplate="%s | TCTP.xyz"
      />
    </>
  )
}

export default Head;
