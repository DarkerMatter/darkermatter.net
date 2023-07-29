import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';

// ReactDOM.render( // This is the old way of rendering React components to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


