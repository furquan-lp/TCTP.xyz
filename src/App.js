import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import About from './About';
import Home from './Home';
import Contact from './Contact';

const Footer = () => {
  return (
    <div style={{color: 'white'}}>
      Copyright (C) 2022 Syed Furquan Ahmad. All rights reserved.
    </div>
  )
}

const Header = () => {
  return(
    <div style={{background: 'white'}}>
      <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
