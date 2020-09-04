import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './store/configure-store';

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
