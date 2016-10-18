/** Actions */
export const FETCH_PRODUCTS = 'Products::FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'Products::FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'Products::FETCH_PRODUCTS_ERROR';

/** Action Creator */
export const fetchProducts = () => ({ type:FETCH_PRODUCTS });
export const productsFetched = (products) => ({ type:FETCH_PRODUCTS_SUCCESS, products });
export const productFetchingError = (error) => ({ type:FETCH_PRODUCTS_ERROR, error });