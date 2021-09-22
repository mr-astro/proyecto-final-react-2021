import {
    LIST_PRODUCTS_INIT,
    LIST_PRODUCTS_SUCCESS,
    LIST_PRODUCTS_ERROR
} from './types'

import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'

export function getProducts() {
    return (dispatch) => {
        dispatch({ type: LIST_PRODUCTS_INIT })

        const loginSuccess = (username) => {
            dispatch({ type: LIST_PRODUCTS_SUCCESS, payload: username })
        }

        const loginFail = (error) => {
            dispatch({ type: LIST_PRODUCTS_ERROR, payload: error })
        }

        try {
            firebase
            .firestore()
            .collection("data")
            .onSnapshot((docs) => {
                const products = [];
                docs.forEach((doc) => {
                    products.push({
                        id: doc.id,
                        product: doc.data()
                    });
                })
                //console.log(juguetes)
                loginSuccess(products)
            });
        } catch (error) {
            loginFail(error)
        }       
    }
}


