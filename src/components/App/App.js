import React, {useEffect} from "react"
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/reducers/users/userActions";
import { selectCurrentUser } from "../../redux/reducers/users/userSelector";
import { auth, createUserProfileDocument } from "../../firebase/utils";
import  {checkUserIsAdmin}  from "../../utils/utils";
import styled from "styled-components";

import {
  LoginPage,
  AdminPage,
  CheckoutPage,
  CategoryPage,
  AboutPage,
  ProductPage,
  HomePage,
  RegistorPage,
  RecipePage,
  ForumPage,
} from "../../pages";
import AdminBar from "../AdminBar";
import Header from "../Header";



const Root = styled.div``;
const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isAdmin = checkUserIsAdmin(currentUser);
  useEffect(() => {
    const unsubscribefromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });
    return () => {
      unsubscribefromAuth()
    }
  }, [dispatch]);
    return (
      <Root>
        <Router>
          {isAdmin ? <AdminBar /> : null}
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/product">
              <ProductPage />
            </Route>
            <Route path="/product/:id">
              <CategoryPage />
            </Route>
            <Route path="/aboutMe">
              <AboutPage />
            </Route>
            <Route path="/recipe">
              <RecipePage />
            </Route>
            <Route exact path="/checkout">
              <CheckoutPage />
            </Route>
            <Route path="/forum">
              <ForumPage />
            </Route>
            <Route path="/admin">
              {isAdmin === true ? <AdminPage /> : <Redirect to="/" />}
            </Route>
            <Route path="/register">
              <RegistorPage />
            </Route>
            <Route path="/login">
              {currentUser ? <Redirect to="/" /> : <LoginPage />}
            </Route>
          </Switch>
        </Router>
      </Root>
    );
}

export default App