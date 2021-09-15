import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import {Card} from "react-bootstrap";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import {setAddTodoModalStatus,setTodoData,setEditTodoModalStatus,
  handleMultipleDeleteData,handleMultipleCompleteData,handleMultipleCopyData} from "../Redux/Actions/allActions";
import "./Style.css"

export default function ShowList() {
  const [isSelect,setIsSelect]=useState()
  const [toggle,setToggle]=useState(false)
  const addModalStatus=useSelector(state=>state.reducer.setAddModal);
  const editModalStatus=useSelector(state=>state.reducer.setEditModal);
  const data=useSelector(state=>state.reducer.todoData)
  const cData=useSelector(state=>state.reducer.completeData)
  const cpyData=useSelector(state=>state.reducer.copyData)
  const create=localStorage.getItem("createdData")
  const update=localStorage.getItem("updatedData")
  const complete=localStorage.getItem("completedData")
  const createDateTime = JSON.parse(create)
  const updateDateTime = JSON.parse(update)
  const completeData = JSON.parse(complete)
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
        title:todo.title,
        desc:todo.desc,
        time:todo.time,
        date:todo.date,
        id:todo.id,
      }
    })
    )
  }, [data])
    
const handleMultipleDelete = () => {
     let arrId = []
     isSelect.map((del) => {
        if(del.set) {
            arrId.push(del.id)
        }
       return del
      })
      dispatch(handleMultipleDeleteData(arrId))
  }
const handleMultipleComplete=()=>{
  let arrId = []
     isSelect.map((del) => {
        if(del.set) {
            arrId.push(del.id)
        }
       return del
      })
      const compData=data.filter(todo=> arrId.includes(todo.id))
      if(compData.length>0){
      dispatch(handleMultipleCompleteData({compData,cDateTime:new Date().toISOString()}))
      dispatch(handleMultipleDeleteData(arrId))
      }
}
const handleHistory=()=>{
  setToggle(!toggle)
}

const handleMultipleCopy=()=>{
  let arrId = []
     isSelect.map((del) => {
        if(del.set) {
            arrId.push(del.id)
        }
       return del
      })
     const copyData= data.filter(todo=> arrId.includes(todo.id) )
     dispatch(handleMultipleCopyData(copyData))
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
      
      <div style={{float: 'left'}}>
        <h2>Todo</h2>
        {data && data.map((todo)=>
          <Card style={{ width: '15rem' , height: "auto" , marginBottom:"15px"}}>
            <Card.Body>
              <Card.Title onClick={()=>editTodoModal(todo)}>Title:-{todo.title}</Card.Title>
                <Card.Text>Desc:-{todo.desc}</Card.Text>
                <input type="checkbox" className="m-3"
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
                }/>
                
              </Card.Body>
              <i className="fa fa-history fa-2x" style={{textAlign:"center"}} onClick={()=>handleHistory()}/>
              <Card.Title>{toggle && createDateTime.map(data=> (data.id===todo.id)?
               <><p>createdAt:{data.dateTime}</p>
              </>: "" )}
              {updateDateTime && toggle && updateDateTime.map(data=> (data.id===todo.id)?
              <><p>updatedAt:{data.uDateTime}</p>
              </>:"")}
              </Card.Title>

          </Card>)}

          { data.length>0 ? <> <input type="button" className="btn btn-primary m-3" value="Delete" 
          onClick={()=>handleMultipleDelete()} />
          <input type="button" className="btn btn-primary m-3" value="Complete" 
          onClick={()=>handleMultipleComplete()} />
          <input type="button" className="btn btn-primary m-3" value="Copy" 
          onClick={()=>handleMultipleCopy()} /> </>:""}
          </div>
         
      <hr/>
          <div style={{float: 'right'}}>
        <h2>Completed Todo</h2>
        {cData && cData.map(cdata=>
              
              <Card style={{ width: '15rem' , height: "auto" , marginBottom:"15px"}}>
                <Card.Body>
                    {cdata.compData.map(cTodo=>
                    <>
                        <Card.Text>Title:{cTodo.title}</Card.Text>
                        <Card.Text>Desc:{cTodo.desc}</Card.Text>
                    </>)}
                </Card.Body>
              </Card>)}

          <br/><hr/>
          <h2>Copy Data</h2>
          {cpyData && cpyData.map(ctodo=>
          ctodo.map(com=>
            <Card style={{ width: '15rem' , height: "auto" , margin:"15px"}}>
            <Card.Body>
              <Card.Title>Title:-{com.title}</Card.Title>
              <Card.Text>Desc-{com.desc}</Card.Text>
            </Card.Body>

          </Card>))}
          
          </div>
          
      
    </div>
  );
}

