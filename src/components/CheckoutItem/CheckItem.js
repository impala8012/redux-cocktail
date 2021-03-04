import React from "react";
import {useDispatch} from "react-redux"
import {clearItem, addItem, removeItem} from "../../redux/reducers/cart/cartAction"
import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../../constants/style";

const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 50px;

  img {
    width: 100%;
    height: 100%;
  }
  ${MEDIA_QUERY_MD} {
    padding-right: 0;
    margin-left:10px;
  }
`;

const TextContainer = styled.span`
  width: 22%;
  margin-left: 2px;
  ${MEDIA_QUERY_MD} {
    margin: 0px;
    width: 20%;
    margin-right:2px;
  }
`;

const QuantityContainer = styled(TextContainer)`
  display: flex;
  ${MEDIA_QUERY_MD} {
    margin-left: 2px;
  }
  span {
    margin: 0 10px;

    ${MEDIA_QUERY_MD} {
      margin: 0 5px;
    }
  }

  div {
    cursor: pointer;
  }
`;

const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
  ${MEDIA_QUERY_MD} {
    padding: 0;
  }
`;

// UTF-8 dingbats unicode 8 windings
const CheckItem = ({cartItem}) => {
  const dispatch = useDispatch()
    return (
      <CheckoutItemContainer>
        <ImageContainer>
          <img src={cartItem.imageUrl} alt="item" />
        </ImageContainer>
        <TextContainer>{cartItem.name}</TextContainer>
        <QuantityContainer>
          <div onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
          <span>{cartItem.quantity}</span>
          <div onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
        </QuantityContainer>
        <TextContainer>{cartItem.price}</TextContainer>
        <RemoveButtonContainer onClick={() => dispatch(clearItem(cartItem))}>
          &#10005;
        </RemoveButtonContainer>
      </CheckoutItemContainer>
    );
}

export default CheckItem