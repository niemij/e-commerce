import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootimport rootReducer from './root-reducer'
-reducer from './root-reducer'

const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store