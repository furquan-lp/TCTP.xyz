import React from 'react';
import { Link } from 'gatsby';

import './header.css';
import sitelogo from '../../assets/logo.svg';

const Header = () =>
  <div className="flex items-center justify-between shadow-panel pb-0.6">
    <Link to="/" className="flex items-center">
      <img src={sitelogo} alt="The Chip Tinker Project" className="ml-2 w-10 h-10 md:w-12 md:h-12 transition-all
      duration-300 hover:brightness-125 hover:contrast-125" />
      <span id="logo-title">TCTP - The Chip Tinker Project</span>
    </Link>
    <div className="header-links">
      <Link to="/blog" className="header-link">Blog</Link>
      <Link to="/about" className="header-link">About</Link>
    </div>
  </div>;

export default Header;