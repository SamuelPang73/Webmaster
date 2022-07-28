import  { combineReducers } from 'redux' ;

import authReducer from './auth' ;
import blogsReducer from './blogs' ;

export default combineReducers({
    auth : authReducer,
    blogs : blogsReducer
});