import { useQuery } from "@apollo/client";
import { HELLO_QUERY } from "./queries";

function App() {
  const { loading, error, data } = useQuery(HELLO_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>GraphQL React App</h1>
      <p>Response from GraphQL API: {data.hello}</p>
    </div>
  );
}

export default App;
