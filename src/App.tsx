import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      {/* <ThemeProvider theme={customTheme}> */}
      {/* <CSSReset /> */}
      {/* <Router> */}
      {/* <Layout> */}
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
      {/* </Layout> */}
      {/* </Router> */}
      {/* </ThemeProvider> */}
    </ApolloProvider>
  );
};

export default App;
