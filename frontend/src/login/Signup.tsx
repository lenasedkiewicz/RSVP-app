import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SIGNUP_MUTATION = gql`
  mutation Signup($input: CreateUserInput!) {
    signup(input: $input)
  }
`;

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [signup] = useMutation(SIGNUP_MUTATION);

  const handleSignup = async () => {
    setError(null); // Reset error before request

    // Basic validation
    if (!email || !password) {
      setError("Email and password are required!");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long!");
      return;
    }

    setLoading(true);
    try {
      const { data } = await signup({
        variables: { input: { email, password } },
      });
      if (data.signup) {
        alert("Signup successful! Please login.");
        navigate("/login"); // Redirect after signup
      }
    } catch (err: any) {
      setError(err.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", maxWidth: 300, margin: "auto" }}>
      <h2>Signup</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
        required
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button onClick={handleSignup} disabled={loading}>
        {loading ? "Signing up..." : "Signup"}
      </button>
    </div>
  );
}
