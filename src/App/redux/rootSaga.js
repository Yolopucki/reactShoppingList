import {takeEvery} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import {getData} from './ajax/sagaGetData';
import * as ActionTypes from './ajax/actionTypes'

export function* watchData() {
    yield takeEvery(ActionTypes.GET_DATA, getData);
}
