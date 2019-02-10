import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'; // eslint-disable-line

import rootReducers from '../reducer';

let enhancers = compose;

const middleware = [thunk];

if (__DEV__) {
  enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const logger = createLogger({ collapsed: true });
  middleware.push(logger);
}

const store = createStore(rootReducers, enhancers(applyMiddleware(...middleware)));

export default store;
