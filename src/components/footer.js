import React from 'react';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { IconContext } from '@react-icons/all-files';

import './footer.css';

const Footer = () =>
  <div className="footer">
    <span id="copyright-text">
      Copyright &copy; 2022 Syed Furquan Ahmad. All rights reserved.
    </span>
    <a href="https://github.com/furquan-lp/tctp.xyz" id="footer-link">
      View source code on GitHub
      <IconContext.Provider value={
        { size: '1rem', className: 'github-icon' }
      }>
        <FiGithub />
      </IconContext.Provider>
    </a>
  </div>;

export default Footer;