import React from 'react';

const divStyle = {
  color: 'white',
  background: 'gray'
};

const Contact = () => {
  document.title = 'Contact | The Chip Tinker Project';
  return (
    <div style={divStyle}>
      <h2>Copyright &#169; 2022 Syed Furquan Ahmad</h2>
      <h2>All rights reserved.</h2>
      <main>
        <p>This section contains contact information...</p>
      </main>
    </div>
  );
};

export default Contact;