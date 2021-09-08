import {ADD_TODO_DATA,ADD_MODAL_STATUS,SET_TODO_DATA,
  EDIT_MODAL_STATUS,EDIT_TODO_DATA} from "../Actions/index";
const initialState = {
    todoData:[],
    setTodo:{},
    setAddModal:{status:false},
    setEditModal:{status:false},
    };
export default function reducer(state = initialState, action){
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
          // todoData:
        }
    default:
        return state;
    }
};