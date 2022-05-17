import React from 'react';

import './header.css';
import sitelogo from '../logo.svg';

const Header = () =>
  <div className="header">
    <a href='https://tctp.xyz' id="logo-link">
      <img src={sitelogo} alt="The Chip Tinker Project" id="logo-filter" />
      <span id="logo-title">TCTP - The Chip Tinker Project</span>
    </a>
    <div className="header-links">
      <a href='https://tctp.xyz/'>Blog</a>
      <a href='https://tctp.xyz/'>About</a>
    </div>
  </div>;

export default Header;