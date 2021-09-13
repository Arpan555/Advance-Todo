import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import {Card} from "react-bootstrap";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import {setAddTodoModalStatus,setTodoData,setEditTodoModalStatus,selectedTodoData,
  handleMultipleDeleteData} from "../Redux/Actions/allActions";
import "./Style.css"
export default function ShowList() {
  const [isSelect,setIsSelect]=useState()
  const addModalStatus=useSelector(state=>state.reducer.setAddModal);
  const editModalStatus=useSelector(state=>state.reducer.setEditModal);
  const data=useSelector(state=>state.reducer.todoData)
  const selectData=useSelector(state=>state.reducer.selectedTodoData)
  const dispatch=useDispatch();
  const addTodoModal=()=>{
    dispatch(setAddTodoModalStatus({status:true}));
  };
  const editTodoModal=(todo)=>{
    dispatch(setTodoData(todo));
    dispatch(setEditTodoModalStatus({status:true}));
  };
  useEffect(() => {
    setIsSelect(data.map(todo=>{
      return{
        set:false,
        title:todo.title,
        desc:todo.desc,
        id:todo.id,
        time:todo.time,
        date:todo.date
      }
    })
    )
  }, [data])
  
  useEffect(() => {
    dispatch(selectedTodoData(isSelect))
  }, [isSelect])

const handleMultipleDelete = (isSelect) => {
     let id = []
     isSelect.map((del) => {
        if(del.set) {
            id.push(del.id)
        }
       return del
      })
      dispatch(handleMultipleDeleteData(id))
  }
return (
    <div style={{ textAlign:"left"}}>
        {addModalStatus.status?<AddTodo/>:""}
        {editModalStatus.status?<EditTodo/>:""}
      <h1 style={{ textAlign:"center"}}>
        <Button variant="primary" onClick={() => addTodoModal()}>
          Add New Todo
        </Button>
      </h1>
      
      <div>
        <h2>Todo</h2>
        {data.map((todo)=>
          <Card style={{ width: '15rem' , height: "auto" , margin:"15px"}}>
            <Card.Body>
              <Card.Title onClick={()=>editTodoModal(todo)}>Title:-{todo.title}</Card.Title>
                <Card.Text>Desc:-{todo.desc}</Card.Text>
                <Card.Text>CreatedAt:-{todo.date} {todo.time}</Card.Text>
                {todo.udate? <Card.Text>UpdatedAt:-{todo.udate} {todo.utime}</Card.Text>:""}
                 <input type="checkbox" 
                 onChange={e=>{
                   let checked=e.target.checked;
                   setIsSelect(
                     isSelect.map(d=>{
                       if(todo.id===d.id){
                         d.set=checked;
                       }
                       return d
                     })
                   )
                  }
                 }
                 />
                 
               </Card.Body>
          </Card>)}
          {data?<input type="button" value="Delete" onClick={()=>handleMultipleDelete(isSelect)}/>:""}
      </div>
    </div>
  );
}

