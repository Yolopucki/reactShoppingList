import {put, call} from "redux-saga/effects";
import axios from "axios";
import {getCategoriesSync, getProductsSync} from "./actions";

export function* getData(action) {
    //put will dispatch new action
    let response = yield  call(axios.get, "https://demo8421975.mockable.io/products");
    yield put(getProductsSync(response.data.products));
    let newCategories = [...new Set(response.data.products.map(p => p.bsr_category))];
    yield put(getCategoriesSync(newCategories));
}
