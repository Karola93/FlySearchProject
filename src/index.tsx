import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/extensions
import store from 'App/store';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import 'index.scss';
// eslint-disable-next-line import/order
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
