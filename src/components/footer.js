import React from 'react';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';

import './footer.css';

const Footer = () =>
  <div className="footer">
    <span id="copyright-text">
      Copyright &copy; 2022 Syed Furquan Ahmad. All rights reserved.
    </span>
    <a href="https://github.com/furquan-lp/tctp.xyz" id="footer-link">
      <FiGithub />
      View source code on GitHub
    </a>
  </div>;

export default Footer;