import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <link rel='stylesheet' type='text/css' href='./themes/dark/bootstrap.css'/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button >Test button</Button>
      </header>
    </div>
  );
}

export default App;
