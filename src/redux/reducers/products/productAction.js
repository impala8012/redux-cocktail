import {  CREATE_SUCCESS } from "./productActionTypes";
import { createProduct } from "../../../firebase/utils";

// export const addNewProduct = productData => ({
//     type: ADD_NEW_PRODUCT,
//     payload: productData
// })

export const addNewProduct = ({
  productCategory,
  productName,
  productThumbnail,
  productPrice,
  productDesc,
}) => async (dispatch) => {
  try {
    await createProduct({
      productCategory,
      productName,
      productThumbnail,
      productPrice,
      productDesc,
    });
    dispatch({
      type: CREATE_SUCCESS,
      payload: true,
    });
  } catch (err) {
    console.log("create error", err);
  }
};