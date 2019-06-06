import * as ActionTypes from './actionTypes';

const initialState = {
    products: [],
    categories: []
};
const ajaxRequest = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS:
            return {
                ...state,
                products:  action.payload
            };
        case ActionTypes.GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
    }
    return state;
};

export default ajaxRequest;
