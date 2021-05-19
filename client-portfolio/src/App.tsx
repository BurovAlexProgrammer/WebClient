import React, { useContext } from 'react';
import './App.scss';
import AppContext from './contexts/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Page_Home } from './components/Pages/Page_Home';
import { HashRouter as Router, Route} from 'react-router-dom';

function App() {
  const ctx = useContext(AppContext);

  const onButtonClick = () => {
    alert(ctx.stylePath);
  }

  return (
    <Router>
      <div className="App">
        <link rel='stylesheet' type='text/css' href={ctx.stylePath}/>
        <link rel='stylesheet' type='text/css' href='./styles/toggle.css'/>
        <Header/>
        
        <main role="main" className="container">
          <Route exact path="/home" component={Page_Home}/>
          <Route path="*" component={() => {return <h1>Page not found</h1>;}} />
        </main>
        <Footer fixed={true}/>
      </div>
    </Router>
  );
}

export default App;
