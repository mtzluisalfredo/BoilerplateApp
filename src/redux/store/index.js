import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'; // eslint-disable-line

import rootReducers from '../reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}


let enhancers = compose;

const middleware = [thunk];

if (__DEV__) {
  enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const logger = createLogger({ collapsed: true });
  middleware.push(logger);
}
const persistedReducer = persistReducer(persistConfig, rootReducers)


export default createStore(persistedReducer, enhancers(applyMiddleware(...middleware)));