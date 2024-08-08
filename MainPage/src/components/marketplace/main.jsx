import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './MarketPlace.jsx'
import './index.css'
import { store } from './redux/store.js'
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import {Toaster} from 'react-hot-toast';
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <Provider store={store}>
  
  <App />
  
  <Toaster/>
</Provider>
  </BrowserRouter>,
)
