import {
    LOGIN_USER_INIT,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGOUT_USER_INIT,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_ERROR
} from './types'

const initialStore = {
    data: {},
    error: null,
    success: null,
    loading: false
}

export const loginReducer = (prevState = initialStore, action) => {
    switch (action.type) {
        case LOGIN_USER_INIT:
            return {
                ...prevState,
                loading: true
            }

        case LOGIN_USER_SUCCESS:
            return {
                ...prevState,
                data: action.payload,
                loading: false,
                success: true,
                error: false
            }

        case LOGIN_USER_ERROR:
            return {
                ...prevState,
                loading: false,
                success: false,
                error: action.payload
            }

        case LOGOUT_USER_INIT:
            return {
                ...prevState,
                loading: true
            }

        case LOGOUT_USER_SUCCESS:
            return {
                ...prevState,
                data: {},
                loading: false,
                success: false,
                error: false
            }

        case LOGOUT_USER_ERROR:
            return {
                ...prevState,
                loading: false,
                success: false,
                error: action.payload
            }

        default:
            return prevState
    }
}