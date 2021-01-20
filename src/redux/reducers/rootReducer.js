import productReducer from "./products/productReducer";
import userReducer from "./users/userReducer";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directoryReducer"
import { combineReducers } from "redux";


const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

export default rootReducer