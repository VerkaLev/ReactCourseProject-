import createSagaMiddleware from '@redux-saga/core';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  Reducer,
  StoreEnhancer,
} from 'redux';
import { initialState } from './initialState';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const enhancers = [devtoolsExtension()];
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

export const store = createStore(
  combineReducers(rootReducer) as Reducer,
  initialState,
  composedEnhancers as StoreEnhancer<unknown, {}>
);

sagaMiddleware.run(rootSaga);
export default store;
