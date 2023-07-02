import React from "react";
import {reducerP} from "../store"
//import { useDispatch, useSelector, useStore, createSelectorHook, createDispatchHook } from 'react-redux';
import { AddTodoAction } from '../actions/TodoTestActions.js';
import {hooks, mstrDsp, mstrActs} from '../data/stores/masterStore.js'
//import {TodoTestReducer} from "./reducers/TodoTestReducers"

//window.setInterval( ()=> {hooks.stor = AddTodoAction(new Date().getTime())}, 3000 )

console.log(mstrActs)

let x = "https://script.google.com/macros/s/AKfycbz-sN9HyNIDWW0hPnaZlfZOFmsXF8M7y_4oq68iDucPDIVonUIbIws_7vu_x2t5zZE75g/exec"
let f = fetch(x, {method:"POST", body:{id:45, desc: "prior"}}).then(d=> d.json().then(j=> console.log(j)))


export const AttachReducerLater = (params) => {
  
  const stor = hooks.stor //useStoreSel((state) => {console.log({state});return state.Todo});
  //
  console.log(`AttachReducerLater / ${new Date().getTime()} `)
  return (<>
    {JSON.stringify(stor)}
    <button onClick={(e)=> {
        hooks.stor = AddTodoAction(new Date().getSeconds())
        mstrDsp(mstrActs.actions.addUser())
      } }>Add Todo</button>
  </>)
}