import React from "react";
import "./style.css";

import {TodoTestList} from "./components/TodoTestList"
import {AttachReducerLater} from "./components/AttachReducerLater"
import {TestComponent2} from "./components/TestComponent2"
import {TestHookComp} from "./components/TestHookComp"

export default function App() {
  console.log(`App / ${new Date().getTime()} `)
  return (
    <div>
      <h1>Album manager .</h1>
      {/* <TodoTestList nm="list 1"></TodoTestList> */}
      {/* <TodoTestList nm="list 2"></TodoTestList> */}
      <AttachReducerLater></AttachReducerLater> 
      <TestHookComp></TestHookComp>
      <TestComponent2></TestComponent2>
      
    </div>
  );
}
