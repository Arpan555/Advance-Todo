import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {setEditTodoModalStatus,editTodoData,resetTodo} from "../Redux/Actions/allActions";
let uDateTime=new Date().toISOString()
function EditTodo() {
  const dispatch=useDispatch();
  const editData=useSelector(state=>state.reducer.setTodo)
  const show=useSelector(state=>state.reducer.setEditModal)
  const handleClose=()=>{
    dispatch(setEditTodoModalStatus({status:false}))
  }
  useEffect(() => {
    uDateTime=new Date().toISOString()
   },[uDateTime])
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(editTodoData({
      title:e.target.title.value,
      desc:e.target.desc.value,
      id:editData.id,
      dateTime:editData.dateTime,
      uDateTime:uDateTime
    }))
    dispatch(resetTodo())
    handleClose();
  };
  
  return (
    <div>
      <Modal show={show.status} onHide={handleClose}>
        <Modal.Header closeButton aria-label="Close">
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>title</Form.Label>
              <Form.Control type="text" name="title" placeholder="Enter title" 
              defaultValue={editData.title}
              required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="desc"
                placeholder="Enter Description"
                defaultValue={editData.desc}
              required/>
            </Form.Group>

            <center>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              &nbsp;&nbsp;
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </center>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default EditTodo