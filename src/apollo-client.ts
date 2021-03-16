import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
});

export default client;
