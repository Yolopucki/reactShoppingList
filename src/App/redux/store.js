import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import ajaxReducer from './ajax/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(ajaxReducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;
