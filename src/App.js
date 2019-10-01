import React from 'react';
import logo from './walkeri-logo-text.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{padding:15}}>
          Culture, process, and about delivering quality products
        </p>
        <span className="App-footer">We eat first, then put ❤ on everything we made</span>
      </header>
    </div>
  );
}

export default App;
