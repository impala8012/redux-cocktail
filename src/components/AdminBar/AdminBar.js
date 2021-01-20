import React from "react"
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/reducers/users/userSelector";
import { checkUserIsAdmin } from "../../utils/utils";
import styled from "styled-components"
import { Link} from "react-router-dom";

const AdminContainer = styled.div`
  display: inline-block;
  width:100%;
  background-color:black;
  height: auto;
  padding: 0px 10px;
  

  ul,li {
    list-style:none;
    margin: 0;
    padding: 0;
  }
  ul {
    float: right;
  }
  li {
    display: inline-block;
  }

  a {
    display: block;
    text-decoration: none;
    font-size: 1.2rem;
    line-height: 1;
    color: white;
    padding:5px;
    margin-right: 20px;
    transition: all .4s ease-in-out;

    &:hover {
      background: rgba(255,255,255,.6);
      color: black;
      transition: all .4s ease-in-out;
    }
  }
`

const AdminBar = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isAdmin = checkUserIsAdmin(currentUser)
  console.log("isAdmin", isAdmin)
  if(!isAdmin) return null
  return (
    <AdminContainer>
      <ul>
        <li>
          <Link to="/admin">
            管理後臺
          </Link>
        </li>
      </ul>
    </AdminContainer>
  );
};

export default AdminBar;
