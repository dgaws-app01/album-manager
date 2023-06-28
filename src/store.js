import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "react-thunk"

const reducer = combineReducers({

})

const initState = {}

const middleware = [thunk]

export const store = createStore(reducer, initState, applyMiddleware(...middleware) )

