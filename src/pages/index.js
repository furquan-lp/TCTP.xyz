import React from 'react';

import Header from '../components/header';
import Welcome from '../components/welcome';
import '../style.css';

const Home = () =>
  <div className="Home">
    <Header />
    <Welcome />
  </div>;

export default Home;