import React from "react"
import { useSelector } from "react-redux";
import { selectDirectory } from "../../redux/reducers/directory/directorySelector";
import styled from "styled-components"
import MenuItem from "../MenuItem";

const HomeItemsMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Directory = () => {
  const directories = useSelector(selectDirectory);
  return (
    <HomeItemsMenuContainer>
      {directories &&
        directories.map((directory) => (
          <MenuItem key={directory.id} directory={directory} />
        ))}
    </HomeItemsMenuContainer>
  );
};

export default Directory;
