import {ADD_TODO_DATA,ADD_MODAL_STATUS,SET_TODO_DATA,
  EDIT_MODAL_STATUS,EDIT_TODO_DATA,
  RESET_TODO,HANDLE_MULTIPLE_DELETE_DATA
,HANDLE_MULTIPLE_COMPLETE_DATA,HANDLE_MULTIPLE_COPY_DATA
,DELETE_FROM_COMPLETE_DATA,ADD_TODO_DATA_FROM_UNCOMPLETE} from "../Actions/index";
const initialState = {
    todoData:[],
    setTodo:{title:""},
    setAddModal:{status:false},
    completeData:[],
    setEditModal:{status:false},
    };
export default function reducer(state = initialState, action){
    switch (action.type) {
    case ADD_TODO_DATA:
      return{
            ...state,
            todoData:[...state.todoData,action.payload]
        }
    case HANDLE_MULTIPLE_COPY_DATA:
      return{
        ...state,
        todoData:[...state.todoData , ...action.payload]
      }
    case ADD_MODAL_STATUS:
      return {
            ...state,
            setAddModal:{...state.setAddModal,...action.payload},
        };
    case HANDLE_MULTIPLE_DELETE_DATA:
      return{
            ...state,
            todoData:state.todoData.filter(data=> !(action.payload.includes(data.id)))

        }
    case DELETE_FROM_COMPLETE_DATA:
      return{
        ...state,
        completeData: state.completeData.filter(data=> data.id !== action.payload.id )
      }
    case HANDLE_MULTIPLE_COMPLETE_DATA:
      return{
        ...state,
        completeData:[...state.completeData , ...action.payload.compData]
      }
    case ADD_TODO_DATA_FROM_UNCOMPLETE:
      return{
        ...state,
        todoData:[...state.todoData,action.payload]

      }
    case EDIT_MODAL_STATUS:
      return{
              ...state,
              setEditModal:{...state.setEditModal,...action.payload}
            }
    case SET_TODO_DATA:
      return{
              ...state,
              setTodo:{...state.setTodo,...action.payload}
          }
    case RESET_TODO:
      return{
            ...state,
            setTodo:{}
          }
    case EDIT_TODO_DATA:
      return{
            ...state,
            todoData:state.todoData.map((todo)=>{
            if (todo.id === action.payload.id) return { ...todo,...action.payload }
              return todo;
              })
              }
    default:
      return state;
    }
};
