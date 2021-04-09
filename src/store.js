import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

import rootReducer from "./reducers/index"
// const reducer = combineReducers({
  
// });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    
    composeEnhancer(applyMiddleware(thunk))
);

export default store;