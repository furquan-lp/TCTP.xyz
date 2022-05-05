import React from 'react';

import Header from '../components/header';
import Welcome from '../components/welcome';
import '../style.css';

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Welcome />
    </div>
  );
};
