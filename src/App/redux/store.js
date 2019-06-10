import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import ajaxReducer from './ajax/reducers';
import {watchData} from './rootSaga';
//saga
const sagaMiddleware = createSagaMiddleware();
//to use redux devtools in chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [logger, thunk, sagaMiddleware];
const store = createStore(combineReducers({ajaxReducer}), composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(watchData);
export default store;
