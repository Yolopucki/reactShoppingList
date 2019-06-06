import {takeEvery} from 'redux-saga/effects';


import {getData} from './sagaGetData';
import * as ActionTypes from '../actionTypes'

export function* watchData() {
    yield takeEvery(ActionTypes.GET_DATA, getData);
}
