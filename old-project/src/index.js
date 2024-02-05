import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HandlePath from './components/HandlePath';
import { render } from "react-dom";
import {
  BrowserRouter as RT,
  Routes,
  Route
} from "react-router-dom";
import HomeIndex from './components/HomeIndex';
import SignupIndex from './components/SignupIndex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HandlePath />
    {/* <Home page /> */}
    {/*  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
