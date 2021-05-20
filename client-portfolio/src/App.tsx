import React, { useContext } from 'react';
import './App.scss';
import AppContext from './contexts/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Page_Home } from './components/Pages/Page_Home';
import { BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';
import { Page_NotFound } from 'components/Pages/Page_NotFound';

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
              <Switch>
                <Route exact path="/home" component={Page_Home}/>
                <Route path="/link" component={() => {return <h1>Link</h1>;}}/>
                <Route path="/*" component={Page_NotFound}/>
              </Switch>
        </main>
        <Footer fixed={true}/>
      </div>
  );
}

export default App;
