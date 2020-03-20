import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { Switch, Route } from "react-router";
import ShopPage from "./pages/shop-page/ShopPage";
import Header from "./components/header/Header";
import AuthPage from "./pages/auth-page/AuthPage";
import { auth } from "./firebase/firebase.utils";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unSubscribeFromAuth = null;
    unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log("App -> user", user);
    });
  }, []);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/auth" component={AuthPage} />
      </Switch>
    </div>
  );
};

export default App;
