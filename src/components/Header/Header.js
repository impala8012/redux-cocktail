import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { selectCurrentUser } from "../../redux/reducers/users/userSelector";
import { selseCartIsHidden } from "../../redux/reducers/cart/cartSelector";
import { auth } from "../../firebase/utils";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";
const HaederContainer = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 32px;
`;

const Brand = styled.a`
  font-size: 32px;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Navbarlist = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  width: 300px;
`;

const LeftHeader = styled.div`
  display:flex;
  justify-content: center;
  height: 100%;
  padding: 25px;

  ${Navbarlist} {
    margin-left: 32px;
  }
`;

const Nav = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 150px;
  cursor: pointer;
  color: black;
  text-decoration: none;

  ${(props) =>
    props.$active &&
    `
  background: rgba(0,0,0,0.1)
  `}
`;

const Logout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 150px;
  cursor: pointer;
  color: black;
  text-decoration: none;

  ${(props) =>
    props.$active &&
    `
  background: rgba(0,0,0,0.1)
  `}
`;

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isHidden = useSelector(selseCartIsHidden);
  const location = useLocation();
  const history = useHistory();
  return (
    <HaederContainer>
      <LeftHeader>
        <Brand onClick={()=>history.push("/")}>理性飲酒</Brand>
        <Navbarlist>
          <Nav $active={location.pathname === "/"} to="/">
            首頁
          </Nav>
          <Nav $active={location.pathname === "/product"} to="/product">
            酒類
          </Nav>
          <Nav $active={location.pathname === "/recipe"} to="/recipe">
            酒譜
          </Nav>
          <Nav $active={location.pathname === "/aboutMe"} to="/aboutMe">
            關於我
          </Nav>
        </Navbarlist>
      </LeftHeader>
      <Navbarlist>
        <Nav $active={location.pathname === "/forum"} to="/forum">
          討論區
        </Nav>
        {currentUser ? (
          <Logout onClick={() => auth.signOut()}>登出</Logout>
        ) : (
          <Nav $active={location.pathname === "/login"} to="/login">
            登入
          </Nav>
        )}
        <CartIcon />
      </Navbarlist>
      {isHidden ? null : <CartDropdown />}
    </HaederContainer>
  );
}

export default Header