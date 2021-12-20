import { combineReducers } from "redux";
import itemsReducer from "./items";
import cartReducer from "./cart";

export default combineReducers({
  items: itemsReducer,
  cart: cartReducer,
});
