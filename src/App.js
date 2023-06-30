import React from "react";
import "./style.css";

import {TodoTestList} from "./components/TodoTestList"
import {AttachReducerLater} from "./components/AttachReducerLater"

export default function App() {
  
  return (
    <div>
      <h1>Album manager .</h1>
      {/* <TodoTestList nm="list 1"></TodoTestList> */}
      {/* <TodoTestList nm="list 2"></TodoTestList> */}
      <AttachReducerLater></AttachReducerLater> 
      
    </div>
  );
}
