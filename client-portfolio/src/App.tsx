import React, { useContext } from 'react';
import './App.scss';
import AppContext from './contexts/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Page_Home } from './components/Pages/Page_Home';
import { Route, Switch } from 'react-router-dom';
import { Page_NotFound } from 'components/Pages/Page_NotFound';
import { Page_Portfolio } from 'components/Pages/Page_Portfolio';
import { Page_PortfolioWork } from 'components/Pages/Page_PortfolioWork';
import { Page_Contact } from 'components/Pages/Page_Contact';

function App() {
  const ctx = useContext(AppContext);
  // const onButtonClick = () => {
  //   alert(ctx.stylePath);
  // }

  return (
      <div className="App">
        <link rel='stylesheet' type='text/css' href={ctx.stylePath}/>
        <link rel='stylesheet' type='text/css' href='./styles/toggle.css'/>
        <link rel='stylesheet' type='text/css' href='./styles/common.css'/>
        <Header/>
        <main role="main" className="container mb-5">
              <Switch>
                <Route exact path="/home" component={Page_Home}/>
                <Route path="/portfolio/:workName" component={Page_PortfolioWork}/>
                <Route path="/portfolio" component={Page_Portfolio}/>
                <Route path="/contact" component={Page_Contact}/>
                <Route path="/*" component={Page_NotFound}/>
              </Switch>
        </main>
        <Footer fixed={true}/>
      </div>
  );
}

export default App;
