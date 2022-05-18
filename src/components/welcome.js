import React from 'react';

import '../style.css';

const Welcome = ({ description, image }) => <div className="welcome">
  <span id="big-text">
    <u>Welcome!</u>
    <span id="small-text">{description}<br />
      <a href="https://tctp.xyz/" id="readmore">Learn more...</a>
    </span>
  </span>
  <img src={image} alt="assortment of electronic components" id="welcomeimg" />
</div>;

export default Welcome;