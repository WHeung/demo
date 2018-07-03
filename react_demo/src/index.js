import React from 'react';
import ReactDOM from 'react-dom';
import RouteMap from './routes'
import App from './views/App.js'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <App />
    <RouteMap />
  </div>
  , document.getElementById('root'));

registerServiceWorker();
