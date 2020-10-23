import { GET_POSTS } from '../actions/homeAction';

const initialState = {
  posts: [],
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.data
      }
    default:
      return state;
  }
};
