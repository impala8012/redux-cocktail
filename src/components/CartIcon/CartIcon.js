import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../redux/reducers/cart/cartSelector";
import { toggleCart } from "../../redux/reducers/cart/cartAction";
import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";
import styled from "styled-components";

const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;


const CartIcon = () => {
  const cartItems = useSelector(selectCartItems)
  const itemCount = cartItems.reduce((accumlatedQty, cartItem) => accumlatedQty + cartItem.quantity,0)
    const dispatch = useDispatch()
    return (
      <CartIconContainer onClick={() => dispatch(toggleCart())}>
        <ShoppingIcon />
        <ItemCount>{itemCount}</ItemCount>
      </CartIconContainer>
    );
}

export default CartIcon