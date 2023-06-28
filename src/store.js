import {legacy_createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "react-thunk"

const reducer = combineReducers({

})

const initState = {}

const middleware = [thunk]

export const store = legacy_createStore(reducer, initState, applyMiddleware(...middleware) )

