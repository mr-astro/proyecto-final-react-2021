import { LIST_PRODUCTS_INIT, LIST_PRODUCTS_SUCCESS, LIST_PRODUCTS_ERROR } from './types'

const initialStore = {
    data: [],
    error: null,
    success: null,
    loadingProducts: false
}

export const productsReducer = (prevState = initialStore, action) => {
    switch (action.type) {
        case LIST_PRODUCTS_INIT:
            return {
                ...prevState,
                loadingUsers: true,
            };
        case LIST_PRODUCTS_SUCCESS:
            return {
                ...prevState,
                data: action.payload,
                error: false,
                success: true,
                loadingUsers: false,
            };
        case LIST_PRODUCTS_ERROR:
            return {
                ...prevState,
                error: action.payload,
                success: false,
                loadingUsers: false,
            };
        default:
            return prevState;
    }
};