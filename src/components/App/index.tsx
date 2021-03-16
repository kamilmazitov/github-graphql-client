import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute"
import client from "../../apollo-client";
import { GlobalStyles } from "../../config/globalstyles";
import { observer } from 'mobx-react-lite';
import Layout from "../Layout";
import Search from "../../pages/Search";
import Popular from "../../pages/Popular";
import Account from "../../pages/Account";
import UserProfile from "../../pages/UserProfile";
import Login from "../../pages/Login";
import { useStores } from "../../contexts";

const App: React.FC = () => {
  const { appStore: store } = useStores();

  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Router>
        <Layout>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute component={Popular} path="/popular" isUserLoggedIn={store.isLogged} />
            <PrivateRoute component={Account} path="/account" isUserLoggedIn={store.isLogged} />
            <PrivateRoute component={UserProfile} path="/users/:id" isUserLoggedIn={store.isLogged} />
            <PrivateRoute component={Search} path="/" isUserLoggedIn={store.isLogged} />
          </Switch>
        </Layout>
      </Router>
    </ApolloProvider>
  );
};

export default observer(App);
