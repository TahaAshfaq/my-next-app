"use client";
import { useState } from "react";
import styles from "../styles/pages_auth.css";
import login from "../media/login.svg";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login:", { email, password });
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <h1 className="auth-title">
          <span className="highlight">Log In</span> to your account
        </h1>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Enter your email address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <div className="auth-divider">
          <span>OR</span>
        </div>
        <a href="/signup" className="auth-link">
          Don't have an account
        </a>
      </div>
      <div className="auth-illustration">
      <Image src={login} alt="" />
      </div>
    </div>
  );
}
