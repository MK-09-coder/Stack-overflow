import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {legacy_createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';
const store=legacy_createStore(Reducers,compose(applyMiddleware(thunk)))
 ReactDOM.render (
  <Provider store={store}>
    <React.StrictMode>
    <App /> 
    </React.StrictMode> 
  </Provider>,
  document.getElementById('root'));
  if(localStorage.getItem('Profile')) {
    Kommunicate.init("976347224b36244482bf496dd37fa93d" ,{"popupWidget":true,"automaticChatOpenOnNavigation":true})
    }