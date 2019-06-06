import {put} from 'redux-saga/effects';
import axios from 'axios';
import {getCategoriesSync, getProductsSync} from '../actions';


export function* getData (action){
    //put will dispatch new action
       try{
           let response = yield axios.get('https://demo8421975.mockable.io/products');
            yield put(getProductsSync(response.data.products));
           let newCategories = yield [...new Set(response.data.products.map(p => p.bsr_category))];
            yield put(getCategoriesSync(newCategories))
       }catch(error){
           console.log(error)
       }
}
