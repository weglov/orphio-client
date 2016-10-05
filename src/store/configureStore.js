import { createStore } from 'redux'
import rootReducer from '../reducers/index'

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState,  window.devToolsExtension && window.devToolsExtension())

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}