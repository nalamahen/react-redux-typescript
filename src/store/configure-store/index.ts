import { createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { reducers } from '../reducers';

function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(thunk), devToolsEnhancer({}))
  );

  return store;
}

export default configureStore;
