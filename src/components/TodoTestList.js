import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction } from '../actions/TodoTestActions.js';

export const TodoTestList = (props) => {
  const [td, setTd] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => {console.log(state);return state.Todo});
  const { todos } = Todo || {};
  const { nm } = props;

  const addNewItem = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(td));
    try {
      let f = fetch(
        'https://script.google.com/macros/s/AKfycbz-sN9HyNIDWW0hPnaZlfZOFmsXF8M7y_4oq68iDucPDIVonUIbIws_7vu_x2t5zZE75g/exec',
        { method: 'POST' }
      );
      f.then((r) => r.json().then((j) => console.log(j)));
    } catch (er) {
      console.log(er);
    }
  };

  //console.log({td, setTd, useDispatch, dispatch, Todo})
  console.log({ time: new Date().getTime(), reloaded: nm });

  return (
    <>
      <div>
        <div>
          <label for="#todonew">Add a new item </label>
          <input
            id="todonew"
            type="text"
            onChange={(e) => setTd(e.target.value)}
          ></input>
          <span> </span>
          <button onClick={(e) => addNewItem(e)}>ok</button>
        </div>
        <ul>
          {todos &&
            todos.map((t) => (
              <li key={t.id}>
                -#{t.todo}#-<button>x</button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
