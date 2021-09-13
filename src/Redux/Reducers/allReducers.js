import {ADD_TODO_DATA,ADD_MODAL_STATUS,SET_TODO_DATA,
  EDIT_MODAL_STATUS,EDIT_TODO_DATA,
  RESET_TODO,SELECTED_TODO_DATA,HANDLE_MULTIPLE_DELETE_DATA} from "../Actions/index";
const initialState = {
    todoData:[],
    setTodo:{title:""},
    setAddModal:{status:false},
    setEditModal:{status:false},
    selectedTodoData:{}
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
        case HANDLE_MULTIPLE_DELETE_DATA:
          return{
            ...state,
            todoData: state.todoData.filter((data) => data.id !== action.payload.map(d=>d.id))
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
                if (todo.id === action.payload.id) return { ...todo, ...action.payload }
              return todo;
              })
              }
        case SELECTED_TODO_DATA:
          return{
            ...state,
            selectedTodoData:action.payload          }
        default:
          return state;
    }
};
