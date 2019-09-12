import React from "react";
import {Route} from "react-router-dom";
import Home from "../Components/Home";
import Header from "../Components/Header";
import Login from "../Login";

export default () => (
  <div>
    <Header />
    <Route exact path="/" component={Home} />
    <Route path="/Login" component={Login} />
  </div>
);
