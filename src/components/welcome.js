import React from 'react';

import '../style.css';
import arduinoVector from '../arduino_img_1-.jpeg';

const Welcome = () => <div className="welcome">
  <span id="big-text">
    <u>Welcome!</u>
    <span id="small-text">
      The Chip Tinker Project is a blog about exploring tech and the internet
      with complete tinkering freedom.<br />
      <a href="https://tctp.xyz/" id="readmore">Learn more...</a>
    </span>
  </span>
  <img src={arduinoVector} alt="assortment of electronic components" id="welcomeimg" />
</div>;

export default Welcome;