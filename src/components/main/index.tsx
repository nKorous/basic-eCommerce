import React, { FC, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import * as styles from "./styles";
import AppBarComponent from "./app-bar";
import LoginComponent from "../login";
import CatalogComponent from "../catalog";

export interface Props {}

const MainComponent: FC<Props> = props => {
  const [authStatus, setAuthStatus] = useState<boolean>(false);
  const [loginName, setLoginName] = useState<string>("Guest");

  const isAuth = (loggedIn: boolean) => setAuthStatus(loggedIn);

  const getHome = authStatus ? (
    <CatalogComponent />
  ) : (
    <LoginComponent isAuth={setAuthStatus} getUsername={setLoginName} />
  );

  return (
    <Router>
      <AppBarComponent
        isLoggedIn={authStatus}
        loggedInAs={loginName}
        isAuth={isAuth}
      />

      <div className={styles.root}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => getHome}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default MainComponent;
