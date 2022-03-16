import React from 'react';

const divStyle = {
  color: 'white',
  background: 'gray'
};

const About = () => {
  document.title = 'About | The Chip Tinker Project';
  return (
    <div style={divStyle}>
      <h2>About Page</h2>
      <main>
        <p>This section contains information about...</p>
      </main>
    </div>
  );
};

export default About;