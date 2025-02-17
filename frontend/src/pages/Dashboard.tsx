import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <h2>Welcome to your Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
