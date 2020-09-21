import React from 'react';
import logo from './logo.svg';
import handshake from '../src/salexpert-webpage/common-components/images/handshake.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={handshake} className="logo-dimension" alt={logo}/>
        <h3>
          SaleXpert.in
        </h3>
        <p>
          Website is under construction.
        </p>
        <p>
          Please visit again later.
        </p>
      </header>
    </div>
  );
}

export default App;
