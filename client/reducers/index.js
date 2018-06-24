import { combineReducers } from 'redux';
import usersReducer from './UserReducer/userReducer'
import authReducer from './AuthReducer/authReducer';
import adminsReducer from './AdminReducer/adminReducers';

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer
});
