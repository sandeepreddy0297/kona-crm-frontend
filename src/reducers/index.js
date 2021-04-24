import { combineReducers } from 'redux';
import LeadReducer from './leadsReducer';
import loginReducer from "./userReducer"

const rootReducer = combineReducers({
  
  isUserLogin:loginReducer,
  //login:loginReducer,
  leads:LeadReducer
});

export default rootReducer;

