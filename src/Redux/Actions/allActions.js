import {
    ADD_TODO_DATA,
    ADD_MODAL_STATUS,
    SET_TODO_DATA,
    EDIT_MODAL_STATUS,
    EDIT_TODO_DATA,
    RESET_TODO,
    HANDLE_MULTIPLE_DELETE_DATA,
  HANDLE_MULTIPLE_COMPLETE_DATA,
  HANDLE_MULTIPLE_COPY_DATA,
  ADD_TODO_DATA_FROM_UNCOMPLETE,
  DELETE_FROM_COMPLETE_DATA} from "./index";
const createData=[]
const updateData=[]
const completeData=[]
export const addTodoData=(data)=>{
      createData.push(data)
      localStorage.setItem("createdData",JSON.stringify(createData))
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
  updateData.push(data)
  localStorage.setItem("updatedData",JSON.stringify(updateData))
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
export const handleMultipleDeleteData=(data)=>{
  return{
    type:HANDLE_MULTIPLE_DELETE_DATA,
    payload:data
  }
}
export const handleMultipleCompleteData=(data)=>{
  completeData.push(data)
  localStorage.setItem("completedData",JSON.stringify(completeData))
   return{
    type:HANDLE_MULTIPLE_COMPLETE_DATA,
    payload:data
  }
}
export const addTodoDataFromUncomplete=(data)=>{
  return{
    type:ADD_TODO_DATA_FROM_UNCOMPLETE,
    payload:data
  }
}
export const deleteFromCompleteData=(data)=>{
  return{
    type:DELETE_FROM_COMPLETE_DATA,
    payload:data
  }
}
export const handleMultipleCopyData=(data)=>{
  createData.push(data)
  localStorage.setItem("createdData",JSON.stringify(createData))
  return{
    type:HANDLE_MULTIPLE_COPY_DATA,
    payload:data
  }
}