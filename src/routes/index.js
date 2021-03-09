import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Layout from "../Layout";
import TextEditor from "../pages/TextEditor";
import SignUp from "../pages/SignUp";
import Templates from "../pages/Templates";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/TextEditor" component={TextEditor} />
          <Route exact path="/Templates" component={Templates} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
