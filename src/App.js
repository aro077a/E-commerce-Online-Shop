import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { Switch, Route } from "react-router";
import ShopPage from "./pages/shop-page/ShopPage";
import Header from "./components/header/Header";
import AuthPage from "./pages/auth-page/AuthPage";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/auth" component={AuthPage} />
      </Switch>
    </div>
  );
};

export default App;
