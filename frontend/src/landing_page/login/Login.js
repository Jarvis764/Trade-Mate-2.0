import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/auth/login", form);

      // Save token
      localStorage.setItem("token", res.data.token);

      setMessage("Login success!");

      // 🔥 Redirect to dashboard React app
      window.location.href = "http://localhost:3001"; 
    } catch (err) {
      setMessage(err.response?.data?.message || "Error while login");
    }
  };

  return (
    <div style={{ width: "400px", margin: "80px auto", textAlign: "center" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          style={{ padding: 10, marginBottom: 15, width: "100%" }}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          style={{ padding: 10, marginBottom: 15, width: "100%" }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#0066ff",
            color: "white",
            width: "100%",
          }}
        >
          Login
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
