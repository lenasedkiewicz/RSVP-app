import { ApolloProvider } from "./ApolloProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signup } from "./login/Signup";
import { Home } from "./pages/Home";
import { Login } from "./login/Login";
import { ProtectedRoute } from "./login/ProtectedRoute";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <ApolloProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Protected Dashboard Route */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
