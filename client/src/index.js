import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './state';

const store = configureStore({
  reducer: { 
    //cart : nom state - cartReducer : nom la fucntion dans state
    cart: cartSlice.reducer,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App />
        </ThemeProvider>
    </Provider>
  </React.StrictMode>
);


