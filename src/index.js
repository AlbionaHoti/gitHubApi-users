import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from '../src/store/configureStore'

import './index.css';
import App from './App';
import registerServiceWorker from './components/util/registerServiceWorker';

const initialState = window.initialReduxState
const store = configureStore(initialState)

const rootElement = document.getElementById('root')


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement)

  registerServiceWorker();
  