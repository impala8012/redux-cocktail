import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {
  signInUser,
  signInWithGoogle,
  resetAuth
} from "../../redux/reducers/users/userActions";
import {
  selectUserSignInSuccess,
  selectUserSignInError,
} from "../../redux/reducers/users/userSelector";
import styled from "styled-components";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { useHistory, Link } from "react-router-dom";

const SignInContianer = styled.div`
  margin: 50px auto;
  width: 380px;
  display: flex;
  flex-direction: column;
  h2 {
    margin: 10px 0;
  }
  
`;

const ErrorMessage = styled.div`
  margin-top 10px;  
  color: red;
`;

const SignOutMessage = styled.div`
  font-size: 16px;
  margin-top: 20px;
`

const SignIn = () => {
  const dispatch = useDispatch()
  const signInSuccess = useSelector(selectUserSignInSuccess);
  const signInError = useSelector(selectUserSignInError);
  const history = useHistory();
  const [value, setValue] = useState({email:"", password:""})
  const [errorMessage, setErrorMessgae] = useState("");
  const { email, password } = value;

  useEffect(() => {
    if (signInSuccess) {
      setValue("");
      dispatch(resetAuth());
      history.push("/");
    }
  }, [history, signInSuccess, dispatch]);

  useEffect(() => {
    if (signInError.length > 0) {
      setErrorMessgae(signInError);
    }
  }, [signInError]);
  

  const handleSubmit= async(e) => {
    e.preventDefault();
    dispatch(signInUser({email, password}))

  }
  const handleChange = (e) => {
    setValue({...value, [e.target.name]: e.target.value})
  }

  const handleGoogleSignIn = ()=>{
    dispatch(signInWithGoogle());
  }
    return (
      <SignInContianer>
        <form onSubmit={handleSubmit}>
          <h2>帳號登入</h2>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="password"
            required
          />
          <CustomButton>登入</CustomButton>
          <CustomButton onClick={handleGoogleSignIn} isGoogleSignIn="true">
            Google 帳號登入
          </CustomButton>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </form>
        <SignOutMessage>
          還未註冊嗎?
          <Link to="/register" onClick={()=>{
            dispatch(resetAuth());
          }}> 註冊去</Link>
        </SignOutMessage>
      </SignInContianer>
    );
}

export default SignIn