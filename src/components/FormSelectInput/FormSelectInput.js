import React from "react";
import styled from "styled-components";
const Container = styled.div`
  position: relative;
  margin: 45px 0;

  select {
    letter-spacing: 0.3em;
  }
`;


const SelectContainer = styled.select`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;

  &:focus {
    outline: none;
  }
`;

const FormInputLabel = styled.label`
  color: black;
  font-size: 12px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: -14px;

`;


const FormSelectInput = ({ handleChange, label, options, ...props }) => {
  return (
    <div>
      <Container>
        {label && (
          <FormInputLabel className={options.value ? "shrink" : ""}>
            {label}
          </FormInputLabel>
        )}
        <SelectContainer onChange={handleChange} {...props}>
          {options.map((option, index) => {
            return <option key={option.index}>{option.name}</option>;
          })}
        </SelectContainer>
      </Container>
    </div>
  );
};

export default FormSelectInput;