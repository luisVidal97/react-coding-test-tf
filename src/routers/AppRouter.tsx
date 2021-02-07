import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { FocusableComponentsPage } from "../pages/FocusableComponentsPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { VotingListPage } from "../pages/VotingListPage";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/"  component={HomePage}/>
            <Route exact path="/page-not-found" component={NotFoundPage}/>
            <Route exact path="/focusable-input" component={FocusableComponentsPage}/>
            <Route exact path="/voting-list/:candidates" component={VotingListPage}/>
            <Redirect to="page-not-found" />
        </Switch>
      </div>
    </Router>
  );
}
