import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/scss/normalize.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import 'reactjs-popup/dist/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
