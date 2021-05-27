import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './contexts/AppContext';
import { HashRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <AppProvider>
          <CookiesProvider>
            <App />
          </CookiesProvider>
        </AppProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
