import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import About from './Component/About';
import Services from './Component/Services';
import Contact from './Component/Contact';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Contact />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
