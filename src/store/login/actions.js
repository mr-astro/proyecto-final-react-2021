import { LOGIN_USER_INIT, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from './types'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

let provider = new firebase.auth.GoogleAuthProvider();

export function signInWithPopup() {

    return (dispatch) => {
        dispatch({ type: LOGIN_USER_INIT })

        const loginSuccess = (username) => {
            dispatch({ type: LOGIN_USER_SUCCESS, payload: username })
        }

        const loginFail = (error) => {
            dispatch({ type: LOGIN_USER_ERROR, payload: error })
        }

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} 
                var credential = result.credential; */

                // The signed-in user info.
                const user = result.user;
                const userLogin = {name: user.displayName, avatar:user.photoURL }
                localStorage.data = userLogin
                loginSuccess(userLogin)
                

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                //var accessToken = credential.accessToken;

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                loginFail(error.code)
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                const credential = error.credential;

                // ...
            });
        // [END auth_facebook_signin_popup]
    }
}
