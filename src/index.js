import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import firebase from 'firebase/compat/app'
import store from './store'
import App from './App';
import firebaseConfig from './.firebase';
import 'bootstrap/dist/css/bootstrap.css'

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
  document.getElementById('root')
);
