import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux-zero/react';
import App from './App';
import './index.css';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
