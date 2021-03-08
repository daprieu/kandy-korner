import React from 'react';
import ReactDOM from 'react-dom';
import { KandyKorner } from './components/KandyKorner';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ProductsProvider } from './components/products/ProductProvider';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductsProvider />
      <KandyKorner />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
