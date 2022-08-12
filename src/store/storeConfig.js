import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import rootSaga from './sagas/rootSaga';

const sagamiddleware = createSagaMiddleware();
const storageConfig = {
  key: 'key',
  storage: storage,
  blacklist: ['searchReducer'],
};

function configureStore(initState = {}) {
  const middlewares = [sagamiddleware];
  const createStoreMiddleware = applyMiddleware(...middlewares)(createStore);
  const store = createStoreMiddleware(
    persistReducer(storageConfig, rootReducer),
    initState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  sagamiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers/rootReducer').default;
      store.replaceReducer(
        persistReducer(storageConfig, rootReducer(nextRootReducer))
      );
    });
  }
  const persistor = persistStore(store);
  return { store, persistor };
}
const storeConfig = configureStore();
export default storeConfig;
