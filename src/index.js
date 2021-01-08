import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Routes/ScrollToTop';

ReactDOM.render(
    <BrowserRouter>
    <ScrollToTop>
    <App />
    </ScrollToTop>
    </BrowserRouter>,
  document.getElementById('root')
);