import { auth, createUserProfileDocument, GoogleProvider } from "../../../firebase/utils";
import {
  RESET_AUTH,
  SET_CURRENT_USER,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
} from "./userActionTypes";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
}


export const signInUser = ({email,password}) => async dispatch => {
  try {
    await auth.signInWithEmailAndPassword(email, password)
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: true
    });
  }catch (err){
    dispatch({
      type: SIGN_IN_ERROR,
      payload: err.message,
    });
  }
}

export const signUpUser = ({name, email, password, confirmedPassword}) => async dispatch => {
  if (password !== confirmedPassword) {
    alert("密碼不正確");
    const error = ["密碼不正確"]
    dispatch({
      type: SIGN_UP_ERROR,
      payload: error
    })
    return
  }
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await createUserProfileDocument(user, { name });
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: true
    })
  } catch (error) {
    console.log("signUp error", error);
    dispatch({
      type: SIGN_UP_ERROR,
      payload: error.message,
    });
  }
}

export const signInWithGoogle = () => async dispatch => {
  try {
   await auth.signInWithPopup(GoogleProvider)
   .then(()=>{
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: true,
    });
   })
  }catch(err) {
    console.log(err)
  }
}

export const resetAuth = () => ({
  type: RESET_AUTH
})