import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import {Provider} from 'react-redux';
import store from './redux/store';
import './assets/styles/index.scss';

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);