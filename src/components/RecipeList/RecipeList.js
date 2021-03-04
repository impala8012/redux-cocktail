import React, { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getPaginationPost,
} from "../../redux/reducers/posts/postsAction";
import { Link } from "react-router-dom";
import {
  selectPosts,
  selectIsLoading,
  selectPages,
} from "../../redux/reducers/posts/postsSelector";
import Loading from "../../components/Loading";
import { MEDIA_QUERY_MD } from "../../constants/style";

const Root = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const PostContainer = styled.div`
  border-bottom: 1px solid rgba(0, 12, 34, 0.2);
  padding: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const PostTitle = styled(Link)`
  font-size: 24px;
  color: #333;
  text-decoration: none;
  ${MEDIA_QUERY_MD} {
    font-size: 18px;
  }
`;

const PageContainer = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
`;

const PageBtn = styled.a`
  position: relative;
  padding: 10px 20px;
  margin-left: 2px;
  color: black;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
`;

function Post({ post }) {
  return (
    <PostContainer>
      <PostTitle to={`/recipe/${post.id}`}>{post.title}</PostTitle>
    </PostContainer>
  );
}

const RecipeList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const pages = useSelector(selectPages);
  const limit = 10;
  console.log("pages",pages)
  console.log("posts",posts)

  const handlePageClick = (page) => {
    dispatch(getPaginationPost(page, limit));
  }; 

  useEffect(() => {
    dispatch(getPaginationPost(1, limit));
  }, [dispatch]);
  return (
    <Root>
      <>
        {isLoading && <Loading />}
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
        <PageContainer>
          {pages &&
            pages.map((page) => (
              <PageBtn key={page} onClick={() => handlePageClick(page)}>
                {page}
              </PageBtn>
            ))}
        </PageContainer>
      </>
    </Root>
  );
}

export default RecipeList;