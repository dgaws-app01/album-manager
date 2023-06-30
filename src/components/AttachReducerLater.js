import React from "react";import React from "react";
import {reducerP} from "../store"
//import { useDispatch, useSelector, useStore, createSelectorHook, createDispatchHook } from 'react-redux';
import { AddTodoAction } from '../actions/TodoTestActions.js';
import {store1Context, store2Context, hooks} from '../data/stores/masterStore.js'
//import {TodoTestReducer} from "./reducers/TodoTestReducers"

export const AttachReducerLater = (params) => {
  
  const Todo = hooks.stor //useStoreSel((state) => {console.log({state});return state.Todo});
  const updt =() => {
    hooks.stor =  AddTodoAction("ntd") 
  }
  updt()
  return (<>
    {JSON.stringify(Todo)}
    <button onClick={(e)=> hooks.stor = AddTodoAction("qqqq") }>Add Todo</button>
  </>)
}