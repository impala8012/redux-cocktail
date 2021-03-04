import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getPost } from "../../redux/reducers/posts/postsAction";
import {
  selectPost,
  selectIsLoading
} from "../../redux/reducers/posts/postsSelector";
import Loading from "../../components/Loading";
import { MEDIA_QUERY_LG,MEDIA_QUERY_MD } from "../../constants/style";

const PostContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 16px;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;
const PostTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  margin-bottom: 5px;
  ${MEDIA_QUERY_LG} {
    font-size: 28px;
  }
  ${MEDIA_QUERY_MD} {
    font-size: 20px;
  }
`;

const PostContent = styled.div`
  margin-top: 10px;
  white-space: pre-line;
  word-break: break-word;
  ${MEDIA_QUERY_LG} {
    font-size: 18px;
  }
  ${MEDIA_QUERY_MD} {
    font-size: 16px;
  }
`;
const RecipePostPage = () => {
  const dispatch = useDispatch();
  const post = useSelector(selectPost);
  const isLoading = useSelector(selectIsLoading);

  let { id } = useParams();
  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);
  return (
    <div>
      {isLoading && <Loading />}
      {post && 
      <PostContainer>
        <PostHeader>
          <PostTitle>{post.title}</PostTitle>
        </PostHeader>
        <PostContent>{post.body}</PostContent>
      </PostContainer>
      }
    </div>
  );
}

export default RecipePostPage