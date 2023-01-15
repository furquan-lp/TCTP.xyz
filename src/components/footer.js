import React from 'react';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { IconContext } from '@react-icons/all-files';

import { version } from '../../package.json';

const Footer = ({ attriblink, attrib }) =>
  <div className="flex items-center justify-between border-t border-slate-300 mt-8 mb-2 pt-1 text-sm text-slate-500">
    <span>
      Copyright &copy; {new Date().getFullYear()} Syed Furquan Ahmad.
      <span className="hidden md:inline"> Build version {version}.</span>
    </span>
    <a href={attriblink}>{attrib}</a>
    <a href="https://github.com/furquan-lp/tctp.xyz" className="flex hover:underline">
      <span className="hidden md:inline">View source code on GitHub</span>
      <IconContext.Provider value={
        { size: '1rem', className: 'self-center ml-1' }
      }>
        <FiGithub />
      </IconContext.Provider>
    </a>
  </div>;

export default Footer;