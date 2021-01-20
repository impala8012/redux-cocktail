import React from "react";
import styled, { css } from "styled-components";

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

const CustomButtonContainer = styled.button`
  min-width: 150px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 20px 0 20px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:first-child {
    margin-bottom: 10px;
  }

  ${getButtonStyles}
`;


const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  margin-top:10px;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const CustomButton = ({children, ...props}) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}

export default CustomButton