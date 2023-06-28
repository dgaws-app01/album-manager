import React from "react";
import "./style.css";

import {TodoTestList} from "./components/TodoTestList.js"

export default function App() {
  try{
    let f = fetch("https://script.google.com/macros/s/AKfycbz-sN9HyNIDWW0hPnaZlfZOFmsXF8M7y_4oq68iDucPDIVonUIbIws_7vu_x2t5zZE75g/exec", {method:"POST"})
    f.then(r=> r.json().then(j=> console.log(j)))
  }catch(e){
    console.log(e)
  }
  return (
    <div>
      <h1>Album manager .</h1>
      <TodoTestList nm="list 1"></TodoTestList>
      <TodoTestList nm="list 2"></TodoTestList>
      
    </div>
  );
}
