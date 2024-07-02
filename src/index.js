import React from 'react';
import ReactDOM from 'react-dom/client';
import { firebaseInit } from './firebase.js';
import { Analytics } from "@vercel/analytics/react"
import AllRoutes from './routes.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

firebaseInit();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>

      <AllRoutes />
      <Analytics/>

    </React.StrictMode>
  </BrowserRouter>
);
