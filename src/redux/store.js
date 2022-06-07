import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = 
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

const store = configStore({});
sagaMiddleware.run(rootSaga);

export default store;