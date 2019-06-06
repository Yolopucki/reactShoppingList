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

export const initiateGetData = ()=>{
    return({
        type:ActionTypes.GET_DATA
    })
};




