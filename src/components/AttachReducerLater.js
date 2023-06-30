import React from "react";import React from "react";
import {reducerP} from "../store"
import { useDispatch, useSelector, useStore, createSelectorHook, createDispatchHook } from 'react-redux';
import { AddTodoAction } from '../actions/TodoTestActions.js';
import {store1Context, store2Context} from '../data/stores/masterStore.js'
//import {TodoTestReducer} from "./reducers/TodoTestReducers"

export const AttachReducerLater = (params) => {
  const useStoreSel = createSelectorHook(store1Context)
  const Todo = useStoreSel((state) => {console.log({state});return state.Todo});
  return (<>
    {JSON.stringify(Todo)}
  </>)
}