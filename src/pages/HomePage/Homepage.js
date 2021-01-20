import React from "react";
import styled from "styled-components";
import Directory from "../../components/Directory";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const HomePage = () => {
    return (
      <HomePageContainer>
        <Directory />
      </HomePageContainer>
    );
}

export default HomePage