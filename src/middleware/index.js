// redux thunk is used for asynchronous orchestration.
// handle my action creators
import thunk from 'redux-thunk'
import log from './log'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
    thunk,
    log
)