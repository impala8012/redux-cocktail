import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/reducers/cart/cartSelector";
import { toggleCart } from "../../redux/reducers/cart/cartAction";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CustomButton from "../CustomButton";
import CartItem from "../CartItem";

const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;


const CartDropdown = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
    return (
      <CartDropdownContainer>
        <CartItemsContainer>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <EmptyMessage>目前購物車為空</EmptyMessage>
          )}
        </CartItemsContainer>
        <CartDropdownButton onClick={() => {history.push('/checkout'); dispatch(toggleCart());}}>
          結帳去
        </CartDropdownButton>
      </CartDropdownContainer>
    );
}

export default CartDropdown