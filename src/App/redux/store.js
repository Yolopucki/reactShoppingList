import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


import rootReducer from './rootReducer';
import {watchData} from './rootSaga';
//saga
const sagaMiddleware = createSagaMiddleware();
//to use redux devtools in chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const middlewares = [logger, thunk, sagaMiddleware];
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(watchData);
export default store;
