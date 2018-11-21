import { createStore, applyMiddleware, compose } from 'redux'

import reducer from './reducer'

const middlewares = []
const enhancers = [applyMiddleware(...middlewares)]

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose
/* eslint-enable */

const store = createStore(reducer, {}, composeEnhancers(...enhancers))

export default store
