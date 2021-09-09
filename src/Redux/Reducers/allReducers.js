import {ADD_TODO_DATA,ADD_MODAL_STATUS,SET_TODO_DATA,
  EDIT_MODAL_STATUS,EDIT_TODO_DATA,DELETE_TODO_DATA, RESET_TODO_DATA, ADD_COMPLETE_TODO_DATA} from "../Actions/index";
const initialState = {
    todoData:[],
    completeTodoData:[],
    setTodo:{title:""},
    setAddModal:{status:false},
    setEditModal:{status:false},
    };
export default function reducer(state = initialState, action){
    console.log(action.payload)
    switch (action.type) {
        case ADD_TODO_DATA:
        return{
            ...state,
            todoData:[...state.todoData,action.payload]
        }
    case ADD_MODAL_STATUS:
        return {
            ...state,
            setAddModal:{...state.setAddModal,...action.payload},
        };
    case SET_TODO_DATA:
      return{
        ...state,
        setTodo:{...state.setTodo,...action.payload}
      }
    case EDIT_MODAL_STATUS:
      return{
        ...state,
        setEditModal:{...state.setEditModal,...action.payload}
      }
      case EDIT_TODO_DATA:
        return{
          ...state,
          setTodo:initialState. ,
          todoData:[state.todoData.map((setTodo)=>setTodo.id===action.payload.id)]
        }
      case DELETE_TODO_DATA:
        return{
          ...state,
          todoData:[...state.todoData.filter((setTodo)=>setTodo.id!==action.payload)],
        }
      case RESET_TODO_DATA:
        return{
          ...state,
          setTodo:{}
        }
      case ADD_COMPLETE_TODO_DATA:
        return{
          ...state,
          completeTodoData:[...state.completeTodoData,action.payload]
        }
    default:
        return state;
    }
};
