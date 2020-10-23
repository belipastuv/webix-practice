import { createStore, compose, applyMiddleware } from 'redux';
import withReduxEnhancer from 'addon-redux/enhancer';
import thunk from 'redux-thunk';

import reducers from './redux/reducers';

export const configureStore = (initialState = {}) => {
  const enhancers = [applyMiddleware(thunk)];

  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    const devToolsExtension =
      window.devToolsExtension || window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
    enhancers.push(withReduxEnhancer);
  }

  const store = createStore(reducers, initialState, compose(...enhancers));

  return store;
};
