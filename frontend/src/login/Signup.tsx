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
  const navigate = useNavigate();
  const [signup] = useMutation(SIGNUP_MUTATION);

  const handleSignup = async () => {
    try {
      await signup({ variables: { input: { email, password } } });
      alert("Signup successful! Please login.");
      navigate("/login"); // Redirect after signup
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
