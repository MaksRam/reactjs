import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { addUser } from "../../store/slices/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { addTribe } from "../../store/actions/users";
import { fetchUsers } from "../../store/actions/users";
import axios from "axios";

function AddTribeButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [area, setArea] = useState("");

 const addTribe = () => {
    return function (dispatch) {
        axios
        .post('http://localhost:3002/tribes/', { 
            name: name,
            area: area
        })
        .then((resp) => {
            console.log("resp", resp);
            dispatch(addUser());
            dispatch(fetchUsers());
        })
        .catch((error) => console.log(error))
    }
}

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTribe());
    handleClose();
  };

  return (
    <>
      <Button  style={{backgroundColor: '#ACC196', marginTop: '20px', borderRadius: '10px', color: 'black'}} variant="primary" onClick={handleShow}>
        Add tribe
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add tribe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setArea(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor: '#ACC196', color: 'black'}} variant="primary" onClick={() => handleSubmit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default AddTribeButton;
