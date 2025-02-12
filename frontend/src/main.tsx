import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Create an HTTP link to the backend GraphQL endpoint
const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql",
  headers: {
    "x-apollo-operation-name": "GetUserDetails", // Make sure it's non-empty
    "apollo-require-preflight": "true", // Optional, depending on your needs
  },
  credentials: "include", // Allows cookies/auth headers to be sent
});

// Add headers to the request
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "Content-Type": "application/json", // Ensure proper content type
    },
  };
});

// Create Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
