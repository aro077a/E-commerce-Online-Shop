import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { Switch, Route, Redirect } from "react-router";
import ShopPage from "./pages/shop-page/ShopPage";
import Header from "./components/header/Header";
import AuthPage from "./pages/auth-page/AuthPage";
import { connect } from "react-redux";

import { createUserProfileDocument, auth } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user-actions";

const App = props => {
  const { currentUser, setCurrentUser } = props;

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/auth"
          render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
        />
      </Switch>
    </div>
  );
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
