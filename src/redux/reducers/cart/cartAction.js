import { ADD_ITEM, TOGGLE_CART, CLEAR_ITEM,REMOVE_ITEM } from "./cartActionTypes";

export const toggleCart = () => ({
    type: TOGGLE_CART,
})

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
  type: CLEAR_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});