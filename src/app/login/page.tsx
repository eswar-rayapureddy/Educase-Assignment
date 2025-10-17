"use client";
import "./Login.css";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    const { email, password } = formData;

    if (!email || !password) {
      setError("⚠️ Please fill in both email and password to continue.");
      return;
    }

    setError("");
    router.push("/profile");
  };

  return (
    <div className="login-block">
      <div className="login-card">
        <h2>Login to your PopX account</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <ul className="loginForm">
          <li>
            <TextField
              fullWidth
              required
              name="email"
              label="Email Address"
              placeholder="Enter Your Email Address"
              type="email"
              size="small"
              value={formData.email}
              onChange={handleChange}
            />
          </li>

          <li>
            <TextField
              fullWidth
              required
              name="password"
              label="Password"
              placeholder="Enter Your Password"
              type="password"
              size="small"
              value={formData.password}
              onChange={handleChange}
            />
          </li>

          {error && <p className="error-text-login">{error}</p>}

          <button className="logInBtn" onClick={handleLogin}>
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Login;
