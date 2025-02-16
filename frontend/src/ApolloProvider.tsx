import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

export function ApolloProvider({ children }: { children: React.ReactNode }) {
  return <Provider client={client}>{children}</Provider>;
}
