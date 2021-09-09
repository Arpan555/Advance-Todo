import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import {Card} from "react-bootstrap";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import {setAddTodoModalStatus,setTodoData,setEditTodoModalStatus,deleteTodoData,addCompleteTodoData
  ,resetTodoData} from "../Redux/Actions/allActions";
import "./Style.css"
function ShowList() {
  const addModalStatus=useSelector(state=>state.reducer.setAddModal.status);
  const editModalStatus=useSelector(state=>state.reducer.setEditModal.status);
  const data=useSelector(state=>state.reducer.todoData)
  const completeData=useSelector(state=>state.reducer.completeTodoData)
  const dispatch=useDispatch();
  const addTodoModal=()=>{
    dispatch(setAddTodoModalStatus({status:true}));
  };
  const editTodoModal=(todo)=>{
    dispatch(setTodoData(todo));
    dispatch(setEditTodoModalStatus({status:true}));
  };
const deleteData=(todo)=>{
    dispatch(deleteTodoData(todo.id))
}
const addCompleteData=(todo)=>{
  dispatch(addCompleteTodoData(todo))
  dispatch(deleteTodoData(todo.id))

}
  return (
    <div style={{ textAlign:"left"}}>
        {addModalStatus?<AddTodo/>:""}
        {editModalStatus?<EditTodo/>:""}
      <h1 style={{ textAlign:"center"}}>
        <Button variant="primary" onClick={() => addTodoModal()}>
          Add New Todo
        </Button>
      </h1>
      
      <div>
        <h2>Todo</h2>
        {data.map((todo)=>
          <Card style={{ width: '15rem' , height: "auto" , margin:"15px"}}>
            <Card.Body onClick={()=> editTodoModal(todo) }>
              <Card.Title>Title:-{todo.title}</Card.Title>
                <Card.Text>Desc:-{todo.desc}</Card.Text>
              </Card.Body>
              <Button variant="link" onClick={()=>deleteData(todo)}>Delete</Button>
              <Button variant="link" onClick={()=> addCompleteData(todo) }>Complete</Button>
          </Card>)}
      </div>
      <div>
        <hr/>
        <h2>Completed </h2>
        {completeData.map((todo)=>
          <Card style={{ width: '15rem' , height: "auto" , margin:"15px"}}>
            <Card.Body>
              <Card.Title>Title:-{todo.title}</Card.Title>
                <Card.Text>Desc:-{todo.desc}</Card.Text>
              </Card.Body>
          </Card>)}
      </div>
    </div>
  );
}
export default ShowList;
