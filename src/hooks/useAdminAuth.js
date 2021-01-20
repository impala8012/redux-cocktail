import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/reducers/users/userSelector";
import { useHistory } from "react-router-dom";
import { checkUserIsAdmin } from "../utils";


export const useAdminAuth = props => {
    const currentUser = useSelector(selectCurrentUser);
    const history = useHistory()
    useEffect(() => {
      if (!checkUserIsAdmin(currentUser)) {
        history.push("/login");
      }
    }, [currentUser, history]);
    return currentUser
}
