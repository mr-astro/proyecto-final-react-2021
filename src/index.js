import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import firebase from 'firebase/compat/app'
import store from './store'
import App from './App';
import firebaseConfig from './.firebase';
import 'bootstrap/dist/css/bootstrap.css'

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
