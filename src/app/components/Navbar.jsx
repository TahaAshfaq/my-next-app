import React from 'react';
import styles from "../styles/navbar.css";

function Navbar() {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="logo">
          WORK<span className="logo-highlight">LY</span> 
        </a>
        <nav className="nav">
          <a href="#why-us" className="nav-link">Why us</a>
          <a href="#pricing" className="nav-link">Pricing</a>
        </nav>
        <div className="auth-buttons">
          <button className="btn btn-ghost">Sign up</button>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
