import React from 'react';
import { Link } from 'gatsby';

import './header.css';
import sitelogo from '../logo.svg';

const Header = () =>
  <div className="header">
    <Link to="/" id="logo-link">
      <img src={sitelogo} alt="The Chip Tinker Project" id="logo-filter" />
      <span id="logo-title">TCTP - The Chip Tinker Project</span>
    </Link>
    <div className="header-links">
      <Link to="/blog" className="header-link">Blog</Link>
      <Link to="/about" className="header-link">About</Link>
    </div>
  </div>;

export default Header;