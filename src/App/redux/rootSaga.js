import {takeEvery} from 'redux-saga/effects';
import {getData} from './ajax/sagaGetData';
import * as ActionTypes from './ajax/actionTypes'

export function* watchData() {
    yield takeEvery(ActionTypes.GET_DATA, getData);
}
