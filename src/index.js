import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { OrderProvider } from './contexts/OrderContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <OrderProvider>
      <App />
    </OrderProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
