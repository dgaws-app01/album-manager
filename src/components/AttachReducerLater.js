import React from "react";
import {reducerP} from "../store"
//import { useDispatch, useSelector, useStore, createSelectorHook, createDispatchHook } from 'react-redux';
import { AddTodoAction } from '../actions/TodoTestActions.js';
import {hooks, mstrDsp, mstrActs} from '../data/stores/masterStore.js'
//import {TodoTestReducer} from "./reducers/TodoTestReducers"

export const AttachReducerLater = (params) => {
  
  const Todo = hooks.stor //useStoreSel((state) => {console.log({state});return state.Todo});
  console.log(`AttachReducerLater / ${new Date().getTime()} `)
  return (<>
    {JSON.stringify(Todo)}
    <button onClick={(e)=> {
        hooks.stor = AddTodoAction(new Date().getSeconds())
        mstrDsp(mstrActs.actions.addUser())
      } }>Add Todo</button>
  </>)
}