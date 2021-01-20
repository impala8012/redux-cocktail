import { SET_CURRENT_USER,SIGN_IN_SUCCESS,SIGN_UP_SUCCESS,SIGN_UP_ERROR, RESET_AUTH, SIGN_IN_ERROR } from "./userActionTypes";
const initailState = {
  currentUser: null,
  signInSuccess: false,
  signInError: [],
  signUpSuccess: false,
  signUpError: [],
}

const userReducer = (state = initailState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signInSuccess: action.payload,
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        signInError: action.payload,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: action.payload,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        signUpError: action.payload,
      };
    case RESET_AUTH:
      return {
        ...state,
        signInSuccess: false,
        signUpSuccess: false,
        signUpError: [],
        signInError: [],
      };
    default:
      return state;
  }
};

export default userReducer