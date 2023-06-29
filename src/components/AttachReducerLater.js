import React from "react";import React from "react";
import {reducerP} from "../store"
import {TodoTestReducer} from "./reducers/TodoTestReducers"

export const AttachReducerLater = (params) => {
  console.log(reducerP)
  return <>Attaching later ...</>
}