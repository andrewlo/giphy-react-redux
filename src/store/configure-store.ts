import {
  createStore,
  applyMiddleware,
  compose,
  Middleware,
} from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import thunk from 'redux-thunk';

import promiseMiddleware from '../middleware/promise-middleware';
import logger from './logger';
import rootReducer from '../reducers';

declare const __DEV__: boolean; // from webpack

function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(..._getMiddleware()),
      __DEV__ && environment.devToolsExtension ?
        environment.devToolsExtension() :
        f => f));

  _enableHotLoader(store);
  return store;
}

function _getMiddleware(): Middleware[] {
  let middleware = [
    routerMiddleware(browserHistory),
    promiseMiddleware,
    thunk,
  ];

  if (__DEV__) {
    middleware = [...middleware, logger];
  }

  return middleware;
}

const environment: any = window || this;

function _enableHotLoader(store) {
  if (!__DEV__) {
    return;
  }

  const { hot } = module as any;
  if (hot) {
    hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
}

export default configureStore;
