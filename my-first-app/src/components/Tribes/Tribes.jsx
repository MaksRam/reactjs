import React, {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from '../../store/actions/users';
import './Tribes.css';
import AddTribeButton from './AddTribe';

// useSelector is used when you want to read the current
// value of one the states you have created in your
//  store

export default function BasicTable() {

  const usersList = useSelector((store) => store.users.list);
  const dispatch = useDispatch();

  //dispatching - make action happen

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);



  return (
    <><TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }} align='center'>ID</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align='center'>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align='center'>Area</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {usersList.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell align="center">{user.id}</TableCell>
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center">{user.area}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer><AddTribeButton /></>
  );
}

