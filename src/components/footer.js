import React from 'react';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { IconContext } from '@react-icons/all-files';

import { version } from '../../package.json';
import './footer.css';

const Footer = () =>
  <div className="flex items-center justify-between border-t border-slate-300 mt-8 mb-2 pt-1 text-sm text-slate-500">
    <span>
      Copyright &copy; {new Date().getFullYear()} Syed Furquan Ahmad. Build version {version}.
    </span>
    <a href="https://github.com/furquan-lp/tctp.xyz" className="flex hover:underline">
      View source code on GitHub
      <IconContext.Provider value={
        { size: '1rem', className: 'self-center ml-1' }
      }>
        <FiGithub />
      </IconContext.Provider>
    </a>
  </div>;

export default Footer;