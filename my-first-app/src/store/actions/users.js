import { loadUsers, loadUsersSuccess, loadUsersFailure, addUser, deleteUser } from '../slices/usersSlice';
import axios from 'axios';

export function fetchUsers() {
    return async dispatch => {
        dispatch(loadUsers())

        try {
            const response  = await fetch('http://localhost:3002/tribes');
            const data = await response.json();
            dispatch(loadUsersSuccess(data));
        }
        catch (error) {
            dispatch(loadUsersFailure());
        }
    }
}


export function fetchEmployees() {
    return async dispatch => {
        dispatch(loadUsers())

        try {
            const response  = await fetch('http://localhost:3002/empl');
            const data = await response.json();
            dispatch(loadUsersSuccess(data));
        }
        catch (error) {
            dispatch(loadUsersFailure());
        }
    }
}

export const deleteEmployee = (id) => {
    return function (dispatch) {
       axios
       .delete(`http://localhost:3002/employees/${id}`)
       .then((resp) => {
        console.log("resp", resp);
        dispatch(deleteUser());
        dispatch(fetchEmployees());
       })
       .catch((error) => console.log(error));

};
};
