import {getProductsSync, getCategoriesSync, initiateGetData} from './../actions';
import * as ActionTypes from './../actionTypes';

describe('Ajax actions', () => {
    it('getProductsSync', () => {
        let res = getProductsSync('milk');
        expect(res).toEqual({type: ActionTypes.GET_PRODUCTS, payload: 'milk'});
    });
    it('getCategoriesSync', () => {
        let res = getCategoriesSync('food');
        expect(res).toEqual({type: ActionTypes.GET_CATEGORIES, payload: 'food'});
    });
    it('initiateGetData', () => {
        let res = initiateGetData();
        expect(res).toEqual({type: ActionTypes.GET_DATA});
    });
});
