import {
  ADD_ITEM,
  TOGGLE_CART,
  CLEAR_ITEM,
  REMOVE_ITEM,
} from "./cartActionTypes";
import { addItemToCart,removeItemFromCart } from "./cartUtils";

const initailState = {
    isHidden: true,
    cartItems: []
}

const cartReducer = (state=initailState, action) => {
    switch(action.type){
        case TOGGLE_CART:
          return {
            ...state, 
            isHidden: !state.isHidden,
          }
        case ADD_ITEM:
          return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload)
          };
        case CLEAR_ITEM: 
          return {
            ...state, 
            cartItems: state.cartItems.filter(cartItem =>(cartItem.name !== action.payload.name))
          }
        case REMOVE_ITEM: 
          return {
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload)
          };
      default:
        return state
    }
}

export default cartReducer