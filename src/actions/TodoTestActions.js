export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {Todo : {todos}} = getState()

  const containsTodo = todos.find(t=> t.todo===todo)
  if(!containsTodo && todo!=""){
    dispatch({
      type: "ADD_ITEM",
      payload: [{id:todo, todo}, ...todos]
    })
  }

}

export const RemoveTodoAction =(todo) => (dispatch, getState)=> {
  const {Todo : {todos}} = getState()
  dispatch({
    type: "REMOVE_ITEM",
    payload: todos.filter(t=> t.id!==todo.id)
  })
}