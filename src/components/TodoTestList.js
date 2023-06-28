import React from "react";
import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"

export const TodoTestList = (props) => {
  const [td, setTd] = useState()
  const dispatch = useDispatch()

  const addNewItem = (e) => {
    e.preventDefault()
    dispatch(AddTodoAction(td))
  }

  return (
    <>
      <div>
        <div>
          <label for="#todonew">Add a new item </label> 
          <input id="todonew" type="text" onChange={(e)=> setTd(e.target.value)}></input><span> </span>          
          <button>ok</button>
        </div>
        <ul>
          <li>Item 1 <button>x</button></li>
        </ul>
      </div>
    </>
  )
}