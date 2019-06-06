import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import ajaxReducer from './ajax/reducers';
import {watchData} from './ajax/sagas/index';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(ajaxReducer, composeEnhancers(applyMiddleware(logger, thunk, sagaMiddleware)));

sagaMiddleware.run(watchData);
export default store;
