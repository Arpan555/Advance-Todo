import {
    ADD_TODO_DATA,
    ADD_MODAL_STATUS,
    SET_TODO_DATA,
    EDIT_MODAL_STATUS,
    EDIT_TODO_DATA,
    DELETE_TODO_DATA,
    RESET_TODO_DATA,
    ADD_COMPLETE_TODO_DATA
     } from "./index";
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
export const setTodoData=(data)=>{
   return{
     type:SET_TODO_DATA,
     payload:data
   }
}
export const setEditTodoModalStatus=(status)=>{
  return{
    type:EDIT_MODAL_STATUS,
    payload:status
  }
}
export const editTodoData=(data)=>{
  return{
    type:EDIT_TODO_DATA,
    payload:data
  }
}
export const deleteTodoData=(data)=>{
  return{
    type:DELETE_TODO_DATA,
    payload:data
  }
}
export const resetTodoData=()=>{
  return{
    type:RESET_TODO_DATA
  }
}
export const addCompleteTodoData=(data)=>{
  return{
    type:ADD_COMPLETE_TODO_DATA,
    payload:data
  }
}