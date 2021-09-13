import {
    ADD_TODO_DATA,
    ADD_MODAL_STATUS,
    SET_TODO_DATA,
    EDIT_MODAL_STATUS,
    EDIT_TODO_DATA,
    DELETE_TODO_DATA,
    ADD_COMPLETE_TODO_DATA,
    RESET_TODO,
    SELECTED_TODO_DATA,
    HANDLE_MULTIPLE_DELETE_DATA} from "./index";
export const addTodoData=(data)=>{
      return{
          type:ADD_TODO_DATA,
          payload:data
      }
  }
export const setAddTodoModalStatus=(status)=>{
    return{
    type: ADD_MODAL_STATUS,
    payload: status,
    }
  };
  export const deleteTodoData=(data)=>{
    return{
      type:DELETE_TODO_DATA,
      payload:data
    }
  }
  export const addCompleteTodoData=(data)=>{
    return{
      type:ADD_COMPLETE_TODO_DATA,
      payload:data
    }
  }
  export const setEditTodoModalStatus=(status)=>{
    return{
      type:EDIT_MODAL_STATUS,
      payload:status
    }
  }
  export const setTodoData=(data)=>{
   return{
     type:SET_TODO_DATA,
     payload:data
   }
}
export const editTodoData=(data)=>{
  return{
    type:EDIT_TODO_DATA,
    payload:data
  }
}
export const resetTodo=()=>{
  return{
    type:RESET_TODO
  }
}
export const selectedTodoData=(data)=>{
  return{
    type:SELECTED_TODO_DATA,
    payload:data
  }
}
export const handleMultipleDeleteData=(data)=>{
  return{
    type:HANDLE_MULTIPLE_DELETE_DATA,
    payload:data
  }
}