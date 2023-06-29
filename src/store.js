import {legacy_createStore, createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"

import {TodoTestReducer} from "./reducers/TodoTestReducers"


let reducer = combineReducers({
  Todo : TodoTestReducer
})

const initState = {
  Todo: {todos: [{id:"it1", todo: "it1"}]}
}

const middleware = [thunk]

const store = legacy_createStore(reducer, initState , applyMiddleware(...middleware) )
//const store = createStore(reducer, initState , applyMiddleware(...middleware) )

//console.log(store)

export default store
export const reducerP = (r)=> {store.replaceReducer()}
