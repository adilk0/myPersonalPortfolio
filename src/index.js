import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from "./component/Header";
import { Section1 } from "./component/Section1";
import { Section2 } from "./component/Section2";
import { Section3 } from "./component/Section3";
import { Section4 } from "./component/Section4";
import { Footer } from "./component/Footer";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
