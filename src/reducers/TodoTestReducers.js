export const TodoTestReducers = ( state={todos:[]}, action ) => {
  switch(action.type){
    case "ADD_ITEM" :
      return {todos: action.payload}
      

    case "REMOVE_ITEM" :
      return {todos: action.payload}

    default :
      return state ;
  }

}