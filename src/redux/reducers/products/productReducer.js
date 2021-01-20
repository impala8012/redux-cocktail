import { CREATE_SUCCESS } from "./productActionTypes";
import productData from "./productData";
const initailState = {
  productData,
  createSuccess: false,
};

const productReducer = (state = initailState, action) => {
  switch (action.type) {
    case CREATE_SUCCESS:
      return {
        ...state,
        createSuccess: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;
