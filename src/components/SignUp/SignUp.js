import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser, resetAuth } from "../../redux/reducers/users/userActions";
import styled from "styled-components";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { useHistory } from "react-router-dom";
import { selectUserSignUpError, selectUserSignUpSuccess } from "../../redux/reducers/users/userSelector";


const SignUpContianer = styled.div`
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



const SignUp = () => {
  const dispatch = useDispatch();
  const signUpSuccess = useSelector(selectUserSignUpSuccess)
  const signUpError = useSelector(selectUserSignUpError)
  const history = useHistory();
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmedPassword:""
  });
  const { name, email, password, confirmedPassword } = value;

  const [errorMessage, setErrorMessgae] = useState("")
  useEffect(() => {
    if (signUpSuccess) {
      setValue("");
      dispatch(resetAuth());
      history.push("/");
    }
  }, [signUpSuccess, history, dispatch]);

  useEffect(() => {
    if (signUpError.length > 0) {
      setErrorMessgae(signUpError);
    }
  }, [signUpError]);

  const handleSubmit= async(e) => {
    e.preventDefault()
    dispatch(signUpUser({name, email, password, confirmedPassword}))
  }
  const handleChange = (e) => {
    setValue({...value, [e.target.name]: e.target.value})
  }

  const handleClick = () => {
    history.push("/login")
    dispatch(resetAuth());
  }
    return (
      <SignUpContianer>
        <h2>還未加入會員嗎?</h2>
        <span>現在立即註冊唄</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            label="name"
            required
          />
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
          <FormInput
            type="password"
            name="confirmedPassword"
            value={confirmedPassword}
            onChange={handleChange}
            label="confirm password"
            required
          />
          <div>
            <CustomButton>送出</CustomButton>
            <CustomButton onClick={handleClick}>回登入畫面</CustomButton>
          </div>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </form>
      </SignUpContianer>
    );
}

export default SignUp