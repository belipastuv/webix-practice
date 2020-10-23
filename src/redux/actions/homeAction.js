import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';

export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({
            type: GET_POSTS,
            data: res.data
        })
    } catch(err) {

    }
}