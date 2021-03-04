import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/reducers/cart/cartAction";
import styled from "styled-components";
import CustomButton from "../CustomButton";
import { MEDIA_QUERY_LG,MEDIA_QUERY_MD } from "../../constants/style";

const ProductContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
  ${MEDIA_QUERY_LG} {
    width: 24vw;
  }
  ${MEDIA_QUERY_MD} {
    width: 65%;
    height: 250px;
  }
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

`;

const ProductFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: center;
  font-size: 18px;
`;

const NameContainer = styled.span`
  width: 50%;
  margin-bottom: 15px;
  ${MEDIA_QUERY_LG} {
    font-size: 14px;
  }
  ${MEDIA_QUERY_MD} {
    margin-right: 10px;
    font-size: 12px;
  }
`;

const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
  ${MEDIA_QUERY_LG} {
    font-size: 14px;
  }
  ${MEDIA_QUERY_MD} {
    width: 10%;
    font-size: 12px;
  }
`;

const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

const Product = ({item}) => {
  const dispatch = useDispatch();
    return (
      <ProductContainer>
        <BackgroundImage imageUrl={item.imageUrl} />
        <ProductFooterContainer>
          <NameContainer>{item.name}</NameContainer>
          <PriceContainer>${item.price}</PriceContainer>
        </ProductFooterContainer>
        <AddButton inverted onClick={() => dispatch(addItem(item))}>
          Add to cart
        </AddButton>
      </ProductContainer>
    );
}

export default Product