import React from 'react';
import { Link } from 'gatsby';

const Welcome = ({ description, image }) => <div className="welcome">
  <span id="big-text">
    <u>Welcome!</u>
    <span id="small-text">{description}<br />
      <Link to="blog/what-is-tctp" id="readmore">Learn more...</Link>
    </span>
  </span>
  <Link to="blog/what-is-tctp">
    <img src={image} alt="assortment of electronic components" id="welcomeimg" />
  </Link>
</div>;

export default Welcome;