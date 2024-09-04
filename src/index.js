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
import { MobileContextProvider } from './context/mobileContext.jsx';

firebaseInit();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>

      <MobileContextProvider>

        <ScrollToTop/>
        <Header/>
        
        {/*main page*/}
        <div id="potentialGapCreator"></div>
          <AllRoutes/>

        <Footer/>

      </MobileContextProvider>
      <Analytics/>

    </React.StrictMode>
  </BrowserRouter>
);
