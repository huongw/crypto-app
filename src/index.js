import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));

if (process.env.REACT_APP_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);