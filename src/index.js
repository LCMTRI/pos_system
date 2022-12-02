import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './contexts/AuthContext';
import { OrderProvider } from './contexts/OrderContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <OrderProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    </OrderProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
