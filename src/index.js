import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import firebase from 'firebase/compat/app'
import store from './store'

firebase.initializeApp({
  apiKey: "AIzaSyBP_zmMwEOupMf97YadUxx_lG68tL6w4R0",
  authDomain: "proyecto-final-react-2021.firebaseapp.com",
  projectId: "proyecto-final-react-2021",
  storageBucket: "proyecto-final-react-2021.appspot.com",
  messagingSenderId: "233683039099",
  appId: "1:233683039099:web:c8b00513643ed939fa03de"
})

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
