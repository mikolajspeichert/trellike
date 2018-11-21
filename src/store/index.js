import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

import reducer from './reducer'

const middlewares = [thunk]
const enhancers = [applyMiddleware(...middlewares)]

const persistConfig = {
  key: 'trellike',
  storage,
}

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

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, {}, composeEnhancers(...enhancers))
const persistor = persistStore(store)

export default store
export { persistor }