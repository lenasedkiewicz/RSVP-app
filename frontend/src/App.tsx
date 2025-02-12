import { gql, useQuery } from "@apollo/client";

const HELLO_QUERY = gql`
  query {
    hello
  }
`;

function App() {
  const { loading, error, data } = useQuery(HELLO_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Frontend with Vite</h1>
      <p>Response from backend: {data.hello}</p>
    </div>
  );
}

export default App;
