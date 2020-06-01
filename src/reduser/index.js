import { combineReducers } from 'redux';

import oneUserReduser from './OneUserReducer';
import usersReducer from './UsersReducer';
import authReduser from './AuthReducer';


export default combineReducers({
  auth: authReduser,
  users: usersReducer,
  user: oneUserReduser,
});
