import {legacy_createStore, createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"

import TodoTestReducers from "./reducers/TodoTestReducers"


const reducer = combineReducers({
  Todo : TodoTestReducers
})

const initState = {}

const middleware = [thunk]

const store = legacy_createStore(reducer, initState , applyMiddleware(...middleware) )
//const store = createStore(reducer, initState , applyMiddleware(...middleware) )

export default store

