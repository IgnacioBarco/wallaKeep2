import {
    LOGIN,
    // FETCH_ADVERTS_REQUEST,
    // FETCH_ADVERTS_FAILURE,
    // FETCH_ADVERTS_SUCCESS,
    // SET_BIKES,
    // SET_FILTER,
    // // ADD_TO_CART,
    // ADD_TO_CART_SUCCESS,
    // ADD_TO_CART_REQUEST,
    // REMOVE_FROM_CART,
    // // CHECKOUT_CART,
    // CHECKOUT_CART_REQUEST,
    // CHECKOUT_CART_SUCCESS,
} from './types';

export const login = state => ({
    type: LOGIN,
    state,
  });