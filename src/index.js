import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
  // ----- React-Bootstrap CDN -----
import 'bootstrap/dist/css/bootstrap.min.css';
  // ----- Boxicons CDN -----
import 'boxicons'
  // ----- jQuery CDN -----
import 'jquery'
// import Swiper styles
import 'swiper/css';
  // ----- Main scss file ----- 
import './assets/scss/style.scss';
  // ----- Main js file -----
import './assets/js/main.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
