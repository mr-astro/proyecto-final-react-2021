import {combineReducers } from 'redux'
import { loginReducer } from './login'
import { productsReducer } from './products'

const rootReducer = combineReducers({
    login: loginReducer,
    products: productsReducer
})

export default rootReducer