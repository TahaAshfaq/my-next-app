"use client";

import { useState } from "react";
import styles from "../styles/pages_auth.css";
import signup from "../media/signup.svg";
import Image from "next/image";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup:", { fullName, email, password });
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <h1 className="auth-title">
          <span className="highlight">Create</span> your account
        </h1>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
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
            Signup
          </button>
        </form>
        <div className="auth-divider">
          <span>OR</span>
        </div>
        <a href="/signup" className="auth-link">
          Already have an account
        </a>
      </div>
      <div className="auth-illustration">
        <Image src={signup} alt="" />
      </div>
    </div>
  );
}
