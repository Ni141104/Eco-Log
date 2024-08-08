import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppContextProvider from './context/AppContext.jsx';
import { Provider } from 'react-redux';
import { store } from './components/marketplace/redux/store.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
  <AppContextProvider>
    <App />
    <Toaster/>
  </AppContextProvider>
  </Provider>
  </BrowserRouter>
,
)

// AIzaSyD9WnETGMn5r_5K_dv-cJfmLnKgxvJzThM
