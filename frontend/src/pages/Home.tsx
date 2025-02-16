import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <p>Choose an option:</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
    </div>
  );
}
