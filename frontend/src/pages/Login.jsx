// src/pages/Login.jsx
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [role, setRole] = useState("customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password, role },
        { withCredentials: true }
      );
      console.log("Login successful:", data);
      localStorage.setItem("user", JSON.stringify(data.user));
      alert("Login successful!");
      window.location.href = "/";
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="customer">Customer</option>
        <option value="seller">Seller</option>
      </select>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login; 