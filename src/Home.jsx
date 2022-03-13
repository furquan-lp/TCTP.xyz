import './App.css';
import React from 'react';
import logo from './logo.svg';

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Placeholder content.
                </p>
                <a
                    className="App-link"
                    href="https://github.com/furquan-lp/tctp.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i>Learn More</i>
                </a>
                </header>
            </div>  
        );
    }
}

export default Home;