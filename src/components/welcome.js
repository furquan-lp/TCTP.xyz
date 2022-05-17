import React from 'react';

import '../style.css';
import arduinoVector from '../images/arduino_img_1-.jpeg';

const Welcome = ({ description }) => <div className="welcome">
  <span id="big-text">
    <u>Welcome!</u>
    <span id="small-text">{description}<br />
      <a href="https://tctp.xyz/" id="readmore">Learn more...</a>
    </span>
  </span>
  <img src={arduinoVector} alt="assortment of electronic components" id="welcomeimg" />
</div>;

export default Welcome;