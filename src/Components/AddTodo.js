import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddTodoModalStatus,addTodoData} from "../Redux/Actions/allActions";
import cuid from "cuid";
function AddTodo() {
  const dispatch = useDispatch();
  const show = useSelector(state=>state.reducer.setAddModal);
  const handleClose=()=>{
    dispatch(setAddTodoModalStatus({status:false}));
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addTodoData({
      set:false,
      title:e.target.title.value,
      desc:e.target.desc.value,
      dateTime:new Date().toISOString(),
      id:cuid()},
      
      ))
    handleClose();
  };
  useEffect(() => {
   
  }, [])
  return (
    <div>
      <Modal show={show.status} onHide={handleClose}>
        <Modal.Header closeButton aria-label="Close">
          <Modal.Title>Add Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>title</Form.Label>
              <Form.Control type="text" name="title" placeholder="Enter title" 
              required/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="desc"
                placeholder="Enter Description"
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
export default AddTodo