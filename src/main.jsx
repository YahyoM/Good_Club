// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/index.jsx';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ContextProvider>
        <Toaster reverseOrder={true}/>
        <App />
      </ContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
