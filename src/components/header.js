import React from 'react';
import { Link } from 'gatsby';

import './header.css';
import sitelogo from '../../assets/logo.svg';

const Header = () =>
  <div className="flex items-center justify-between shadow-panel pb-2">
    <Link to="/" className="flex items-center">
      <img src={sitelogo} alt="The Chip Tinker Project" className="ml-2 w-8 h-8 md:w-12 md:h-12 transition-all
      duration-300 hover:brightness-125 hover:contrast-125" />
      <span className="font-logofont text-3xl md:text-6xl ml-2 text-green-dark select-none transition-all duration-300
      md:hover:text-bigger-logo-title hover:text-green-light">TCTP - The Chip Tinker Project</span>
    </Link>
    <div>
      <Link to="/blog" className="mr-2 text-lg md:text-2xl text-green-dark tracking-wider underline decoration-green-dark
       md:decoration-white hover:decoration-green-dark decoration-2 md:decoration-4 visited:text-purple-new
         visited:hover:decoration-purple-new transition-all duration-200">Blog</Link>
      <Link to="/about" className="mr-2 text-lg md:text-2xl text-green-dark tracking-wider underline decoration-green-dark
       md:decoration-white hover:decoration-green-dark decoration-2 md:decoration-4 visited:text-purple-new
         visited:hover:decoration-purple-new transition-all duration-200">About</Link>
    </div>
  </div>;

export default Header;