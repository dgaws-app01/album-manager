import {legacy_createStore, createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"

const reducer = combineReducers({

})

const initState = {}

const middleware = [thunk]

const store = legacy_createStore(reducer, initState , applyMiddleware(...middleware) )
//const store = createStore(reducer, initState , applyMiddleware(...middleware) )

export default store

