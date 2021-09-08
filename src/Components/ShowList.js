import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import {setAddTodoModalStatus,setTodoData,setEditTodoModalStatus} from "../Redux/Actions/allActions";
import "./Style.css"
function ShowList() {
  const addModalStatus=useSelector(state=>state.reducer.setAddModal);
  // const editModalStatus=useSelector(state=>state.reducer.setEditModal);
  const data=useSelector(state=>state.reducer.todoData)
  const dispatch=useDispatch();
  const addTodoModal=()=>{
    dispatch(setAddTodoModalStatus({status:true}));
  };
  const editTodoModal=(data)=>{
    dispatch(setTodoData(data));
    dispatch(setEditTodoModalStatus({status:true}));
  };
  return (
    <div style={{ textAlign:"left"}}>
      <div>
        {addModalStatus.status?<AddTodo/>:""}
        {/* {editModalStatus.status?<EditTodo/>:""} */}
      </div>
      <h1 style={{ textAlign:"center"}}>
        <Button variant="success" onClick={() => addTodoModal()}>
          Add New Todo
        </Button>
      </h1>
      <div>
        <h2>Todo</h2>
        {data.map((data)=>
          <Card key={data.id} style={{ width: '15rem' , height: "10rem" , margin:"15px"}}>
            <Card.Body onClick={()=> dispatch(editTodoModal(data)) }>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.desc}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
}
export default ShowList;
