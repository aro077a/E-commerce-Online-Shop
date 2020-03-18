import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { Switch, Route } from "react-router";
import ShopPage from "./pages/shop-page/ShopPage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
