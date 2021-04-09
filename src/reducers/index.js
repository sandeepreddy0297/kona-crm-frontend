import { combineReducers } from 'redux';
import LeadReducer from './leadsReducer';
import loginReducer from "./userReducer"

const rootReducer = combineReducers({
  // state: (state = {}) => state

  login:loginReducer,
  leads:LeadReducer
});

export default rootReducer;

