import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

let store;

export default {
  configure: preloadedState => {
    // preloadedState can be null (no SSR)
    if (preloadedState) {
      store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));
    } else {
      store = createStore(rootReducer, applyMiddleware(thunk));
    }

    return store;
  },

  currentStore: () => store
};
