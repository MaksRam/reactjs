import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './getEmployee.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import Example from './NewEmployee';
import {useSelector, useDispatch} from 'react-redux';
import {deleteEmployee, fetchEmployees} from '../../store/actions/users';

function GetEmployees() {
  const usersList = useSelector((store) => store.users.list);
  const dispatch = useDispatch();

  //dispatching - make action happen

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

    const postDelete = (id) => {
      // e.preventDefault();
      axios.delete(`http://localhost:3002/employees/${id}`)
      .then(res=>console.log('Deleted!!!', res)).catch(err => console.log(err))
    }

    const handleDelete = (id) => {
      if(window.confirm("Are you sure you want to delete the employee?")) {
        dispatch(deleteEmployee(id));
        
      }
    }

    

    return (
      
        usersList.map(data =>

<Card className='card' style={{ width: '12rem' }} key={data.id}>
      <Card.Img variant="top" src="https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png" />
      <Card.Body className='body'>
        <Card.Title className='name'>{data.name}</Card.Title>
        <Card.Text className='text'>
        {/* {data.id} */}
              
              {data.title}<br />
              {data.tribe}<br/>

        </Card.Text>
        <Button variant="danger" className='delbutn' onClick={() => handleDelete(data.id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button>

      </Card.Body>
    </Card>
 
        ) 


  );

}


export default GetEmployees