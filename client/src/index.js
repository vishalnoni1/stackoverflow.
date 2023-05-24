import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import Reducers from './reducers'

const store = configureStore({ reducer: Reducers, middleware: [thunk] });
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

);
