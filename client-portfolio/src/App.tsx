import React, { useContext } from 'react';
import './App.scss';
import AppContext from './contexts/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Page_Home } from './components/Pages/Page_Home';

function App() {
  const ctx = useContext(AppContext);

  const onButtonClick = () => {
    alert(ctx.stylePath);
  }

  return (
    <div className="App">
      <link rel='stylesheet' type='text/css' href={ctx.stylePath}/>
      <link rel='stylesheet' type='text/css' href='./styles/toggle.css'/>
      <Header/>
      <main role="main" className="container">
        <Page_Home/>
      </main>
      <Footer fixed={true}/>
    </div>
  );
}

export default App;
