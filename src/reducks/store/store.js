import {
  applyMiddleware,
  combineReducers,
  createStore as configureStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { CartsReducer } from '../carts/reducers';
import {ItemReducer} from '../items/reducers'

import { PostsReducer } from '../posts/reducers';

const rootReducer = combineReducers({
  posts: PostsReducer,
  items:ItemReducer,
  carts:CartsReducer,
});

export default function configureStores(preloadedState) {
  const middlewares = [logger, thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = configureStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}

