import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../core/sagas';
import rootReducer, { RootState } from '../reducers';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState?: RootState): Store<RootState> {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(create);

  const store = createStoreWithMiddleware(rootReducer, initialState) as Store<RootState>;

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }
  sagaMiddleware.run(rootSaga);
  return store;
}
