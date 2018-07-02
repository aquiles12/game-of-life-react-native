import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction'
import rootReducer from '../reducers'

function configureStore (preloadedState) {

  const middleware = [
    thunk,
    promiseMiddleware(),
  ]

  const enhancer = compose(
    applyMiddleware(...middleware),
    devToolsEnhancer()
  )

  return createStore(rootReducer, preloadedState, enhancer)

}


export default configureStore
