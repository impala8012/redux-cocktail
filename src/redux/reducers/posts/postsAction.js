import {
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  SET_IS_LOADING,
  SET_PAGES,
} from "./postsActionType";
import { getPostsAPI, getPostAPI, getPaginationPostAPI } from "../../../WebAPI";
import { pagination } from "../../../utils/utils";

const getPostsSuccess = (posts) =>{
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts,
  };
}

const getPostsFailure = (err) => {
  return {
    type: GET_POSTS_FAILURE,
    payload: err
  };
}

const getPostSuccess = (post) => {
  return {
    type: GET_POST_SUCCESS,
    payload: post,
  };
};

const getPostFailure = (err) => {
  return {
    type: GET_POST_FAILURE,
    payload: err,
  };
};

const setPages = (page) => {
  return {
    type: SET_PAGES,
    payload: page,
  };
}

export const setIsLoading = (isLoading) => {
  return {
    type: SET_IS_LOADING,
    payload: isLoading,
  };
};

export const getPosts = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    getPostsAPI().then(res =>{
      dispatch(getPostsSuccess(res));
      dispatch(setIsLoading(false));
    })
    .catch(err=>{
      dispatch(getPostsFailure(err));
    })
  }
}

export const getPost = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    getPostAPI(id)
      .then((res) => {
        dispatch(getPostSuccess(res));
        dispatch(setIsLoading(false));
      })
      .catch((err) => {
        dispatch(getPostFailure(err));
      });
  }
}

export const getPaginationPost = (page, limit) => (dispatch) => {
    dispatch(setIsLoading(true));
    getPaginationPostAPI(page, limit).then((res) => {
      const dataCount = res.headers.get("x-total-count");
      const totalPage = Math.ceil(dataCount / limit);
      const pages = pagination(totalPage);
      return res.json().then(res => {
        dispatch(setPages(pages));
        console.log("total", pagination(totalPage));
        dispatch(getPostsSuccess(res));
        console.log("res", res)
        dispatch(setIsLoading(false));
      })
    });
  };
;