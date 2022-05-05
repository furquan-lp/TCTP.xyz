import React from 'react';

import './header.css';
import sitelogo from '../logo.svg';

const Header = () => <div className="header">
  <div className="tctp-logo">
    <img src={sitelogo} alt="The Chip Tinker Project" />
    <a href='https://tctp.xyz'>
      TCTP - The Chip Tinker Project
    </a>
  </div>
  <div className="header-links">
    <a href='https://tctp.xyz/'>Blog</a>
    <a href='https://tctp.xyz/'>About</a>
  </div>
</div>;

export default Header;