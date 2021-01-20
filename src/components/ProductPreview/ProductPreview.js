import React from "react";
import { useHistory, useLocation } from "react-router";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Product from "../Product";

const ProductPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

const PreviewContainer = styled.div`
  display: flex;
  justify-content: justify-content;
`;


const ProductPreview = ({ product }) => {
  const history = useHistory()
  const location = useLocation()
  return (
    <ProductPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${location.pathname}/${product.routeName}`)}
      >
        {product.title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {product.items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <Product key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </ProductPreviewContainer>
  );
};

export default withRouter(ProductPreview);