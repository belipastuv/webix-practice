import { GET_USERS } from '../actions/usersAction';

const initialState = {
    users: []
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.data
            }
        default:
            return null;
    }   
}