import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.scss';
import {Button} from 'react-bootstrap';
import AppContext from './contexts/AppContext';
import { Header } from './components/Header';

function App() {
  const ctx = useContext(AppContext);

  const onButtonClick = () => {
    alert(ctx.stylePath);
  }

  return (
    <div className="App">
      <link rel='stylesheet' type='text/css' href={ctx.stylePath}/>
      <Header/>
      <main role="main" className="container">
        <br/>
        <Button onClick={onButtonClick}>Test button</Button>

      </main>
    </div>
  );
}

export default App;
