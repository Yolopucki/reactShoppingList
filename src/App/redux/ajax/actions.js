import axios from 'axios';
import * as ActionTypes from './actionTypes';

export const getProductsSync = (products) => {
    return ({
        type: ActionTypes.GET_PRODUCTS,
        payload: products
    });
};
export const getCategoriesSync = (categories) => {
    return ({
        type: ActionTypes.GET_CATEGORIES,
        payload: categories
    });
};

export const getData = () => {
    return dispatch => {
        return axios.get('https://demo8421975.mockable.io/products')
            .then(response => {
                let prod = response.data.products;
                console.log(prod);
               dispatch(getProductsSync(prod)) ;
                let newCategories = [...new Set(response.data.products.map(p => p.bsr_category))];
                dispatch(getCategoriesSync(newCategories));
            })
        .catch(error=>console.log(error))
    };
};



