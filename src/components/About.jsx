import './Components.css';
import React from 'react';

const About = () => {
  document.title = 'About | The Chip Tinker Project';
  return (
    <div className="About">
      <h2>About Page</h2>
      <main>
        <p>This section contains information about...</p>
      </main>
    </div>
  );
};

export default About;