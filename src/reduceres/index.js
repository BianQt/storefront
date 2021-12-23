import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import itemsReducer from "./items";
import cartReducer from "./cart";

const allReducers =  combineReducers({
  items: itemsReducer,
  cart: cartReducer,
});


const store = () => 
  createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))


export default store();