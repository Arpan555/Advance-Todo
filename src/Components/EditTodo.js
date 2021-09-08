// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import React from "react";
// import {useDispatch,useSelector} from "react-redux";
// import {setEditTodoModalStatus,editTodoData} from "../Redux/Actions/allActions";
// import cuid from "cuid";

// function EditTodo() {
//   const dispatch=useDispatch();
//   const show=useSelector(state=>state.reducer.setAddModal);
//   const editData=useSelector(state=>state.reducer.setTodo)
//   const handleClose=()=>{
//     dispatch(setEditTodoModalStatus({status:false}));
//   }
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     dispatch(editTodoData({
//       title:e.target.title.value,
//       desc:e.target.desc.value,
//       id:cuid()}))
//     handleClose();
//   };

//   return (
//     <div>
//       <Modal show={show.status} onHide={handleClose}>
//         <Modal.Header closeButton aria-label="Close">
//           <Modal.Title>Edit Todo</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>title</Form.Label>
//               <Form.Control type="text" name="title" placeholder="Enter title" 
//               value={editData.title}
//               required/>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="desc"
//                 placeholder="Enter Description"
//                 value={editData.desc}
//               required/>
//             </Form.Group>

//             <center>
//               <Button variant="primary" type="submit">
//                 Submit
//               </Button>
//               &nbsp;&nbsp;
//               <Button variant="secondary" onClick={handleClose}>
//                 Close
//               </Button>
//             </center>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }
// export default EditTodo