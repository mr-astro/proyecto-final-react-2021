import {
    LOGIN_USER_INIT,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGOUT_USER_INIT,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_ERROR
} from './types'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const providerFacebook = new firebase.auth.FacebookAuthProvider();
const providerGoogle = new firebase.auth.GoogleAuthProvider();

// Login con facebook
export function signInWithPopupFacebook(cb) {

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
            .signInWithPopup(providerFacebook)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} 
                var credential = result.credential; */

                // The signed-in user info.
                const user = result.user;
                const userLogin = { name: user.displayName, avatar: user.photoURL }
                localStorage.data = userLogin
                loginSuccess(userLogin)
                cb()


                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                //var accessToken = credential.accessToken;

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                loginFail(errorCode)
                //const errorMessage = error.message;
                // The email of the user's account used.
                //const email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                //const credential = error.credential;

                // ...
            });
        // [END auth_facebook_signin_popup]
    }
}

// Login con Google
export function signInWithPopupGoogle(cb) {

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
            .signInWithPopup(providerGoogle)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} 
                var credential = result.credential; */

                // The signed-in user info.
                const user = result.user;
                const userLogin = { name: user.displayName, avatar: user.photoURL }
                localStorage.data = userLogin
                loginSuccess(userLogin)
                cb()


                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                //var accessToken = credential.accessToken;

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                loginFail(errorCode)
                //const errorMessage = error.message;
                // The email of the user's account used.
                //const email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                //const credential = error.credential;

                // ...
            });
        // [END auth_google_signin_popup]
    }
}

// Login con email y password
export function signInWithEmailAndPassword({ email, password }, cb) {
    //console.log(email, password)

    return (dispatch) => {
        dispatch({ type: LOGIN_USER_INIT })

        const loginSuccess = (user) => {
            dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
        }

        const loginFail = (error) => {
            dispatch({ type: LOGIN_USER_ERROR, payload: error })
        }

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                //console.log(cb)
                // Signed in
                const user = userCredential.user;
                const userLogin = { name: user.email, avatar: 'https://www.pngkey.com/png/detail/69-694700_profile-nuevo-usuario-icono.png' }
                localStorage.data = user.uid
                loginSuccess(userLogin)
                cb()
                // ...
            })
            .catch((error) => {
                console.log(error)
                const errorCode = error.code;
                loginFail(errorCode)
                alert(errorCode)
                //const errorMessage = error.message;
            });
    }
}

// LogOut
export function logOut(cbL) {

    return (dispatch) => {
        dispatch({ type: LOGOUT_USER_INIT })

        const logoutSuccess = (user) => {
            dispatch({ type: LOGOUT_USER_SUCCESS, payload: user })
        }

        const logoutFail = (error) => {
            dispatch({ type: LOGOUT_USER_ERROR, payload: error })
        }

        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            localStorage.clear()
            logoutSuccess()
            cbL()
        }).catch((error) => {
            // An error happened.
            logoutFail(error)
        });
    }
}


