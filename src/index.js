import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";

ReactDOM.render(
  //Wrapping this in theme provider allows the app to get stuff out of theme.js
  <ThemeProvider theme= {theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

