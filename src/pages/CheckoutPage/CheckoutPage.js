import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/reducers/cart/cartSelector";
import styled from "styled-components";
import CheckoutItem from "../../components/CheckoutItem";
import StripeButton from "../../components/StripButton";

const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

const CheckoutPageHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HeaderBlockContainer = styled.div`
  justify-content: center;
  width: 25%;

  &:first-child {
    margin-left: 9%;
  }
  &:last-child {
    width: 7%;
  }
`;

const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

const TestMessage = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;

const CheckoutPage = () => {
	const cartItems = useSelector(selectCartItems)
	const total = cartItems.reduce((accumalatedQty, cartItem) => 
		accumalatedQty + cartItem.quantity * cartItem.price ,0)
    return (
      <CheckoutPageContainer>
        <CheckoutPageHeader>
          <HeaderBlockContainer>
            <span>產品</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>名稱</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>數量</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>價錢</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>移除</span>
          </HeaderBlockContainer>
        </CheckoutPageHeader>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <Total>總金額: {total}</Total>
        <TestMessage>
          請用測試的信用卡帳號來做測試
          <br />
          4242 4242 4242 - exp: 01/25 cvw:123
        </TestMessage>
        <StripeButton price={total} />
      </CheckoutPageContainer>
    );
}
export default CheckoutPage