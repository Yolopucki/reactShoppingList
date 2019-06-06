import * as ActionTypes from './actionTypes';
import {updatedObject} from './utils';

const initialState = {
    products: [],
    categories: []
};
const ajaxRequest = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS:
            return updatedObject(state, {products: action.payload});
        case ActionTypes.GET_CATEGORIES:
            return updatedObject(state, {categories: action.payload});
        default:
            return state;
    }
};


export default ajaxRequest;
