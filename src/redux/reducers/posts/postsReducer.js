import {
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  SET_IS_LOADING,
  SET_PAGES
} from "./postsActionType";
const initialState = {
  posts:[],
  errorMessage: [],
  post:[],
  pages: [],
  isLoading:false,
}


const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        posts: action.payload,
      };
    case GET_POSTS_FAILURE:
      return {
        errorMessage: action.payload,
      };
    case GET_POST_SUCCESS:
      return {
        post: action.payload,
      };
    case GET_POST_FAILURE:
      return {
        errorMessage: action.payload,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    case SET_PAGES:
      return {
        pages: action.payload,
      }
    default:
      return state;
  }
};

export default postReducer