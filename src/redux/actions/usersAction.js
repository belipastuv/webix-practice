import axios from 'axios';

export const GET_USERS = "GET_USERS";

export const getUsers = () => async dispatch => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');

        dispatch({
            type: GET_USERS,
            data: res.data
        })
    } catch (err) {

    }
}