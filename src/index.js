import React from 'react';
import ReactDOM from 'react-dom/client';
import { firebaseInit } from './firebase.js';
import { Analytics } from "@vercel/analytics/react"
import AllRoutes from './routes.jsx';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/multiPage/header.jsx';
import ScrollToTop from './components/multiPage/scrollToTop.jsx';
import Footer from './components/multiPage/footer.jsx';
import './index.scss';

firebaseInit();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>

      <ScrollToTop/>

      <Header/>
      {/*main page*/}
      <div style={{marginTop: '200px'}}>
        <AllRoutes/>
      </div>

      <Footer/>
      <Analytics/>

    </React.StrictMode>
  </BrowserRouter>
);
