import { homeReducer } from './homeReducer';
import { combineReducers } from 'redux';
import { usersReducer } from './usersReducers';

//Imoport Reducers here

export default combineReducers({
  homeReducer: homeReducer,
  usersReducer: usersReducer
});
