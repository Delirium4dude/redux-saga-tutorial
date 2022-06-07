import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './reducers';
import rootSaga from './sagas';

const preloadedState = {};
const devMode = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (devMode) middlewares.push(logger);

const store = configureStore({
  reducer: rootReducer,
  devTools: devMode,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(middlewares),
  preloadedState,
});

sagaMiddleware.run(rootSaga);

export default store;
