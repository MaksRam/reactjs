import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./NewEmployee.css";
import axios from "axios";

function Example() {
  
  const tribes = [
    {
      value: "1",
      content: "InternStellar",
    },
    {
      value: "2",
      content: "Rigas",
    },
    {
      value: "3",
      content: "Data Engineering",
    },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [tribe_id, setTribe] = useState(tribes[0].value);



  // const submitValue = () => {
  //   setEmployeesList([
  //     ...employeesList,
  //     {
  //       name: name,
  //       occupation: occupation,
  //       tribe: tribe,
  //     },
  //   ]);
  //   handleClose();
  // };

  const postData = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/employees', {
      name,
      title,
      tribe_id
    }).then(res => console.log('Posting data', res)).catch(err=> console.log(err))
    handleClose();
  }


  return (
    <>
  
      <hr />
      <Button className="button" variant="success" onClick={handleShow}>
        +New employee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Occupation:</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <div>
              <Form.Label>Select tribe:</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setTribe(e.target.value)}
              >
                {tribes.map((tribe) => {
                  return (
                    <option key={tribe.value} value={tribe.value}>
                      {tribe.content}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={postData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
