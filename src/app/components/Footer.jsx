import React from 'react';
import styles from "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <a href="/" className="footer-logo">
            WORK<span className="footer-logo-highlight">LY</span>
          </a>
          <p className="footer-description">
            An End-to-end HR Management Software that aligns with your company goals.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon"><i className="icon-facebook"></i></a>
            <a href="#" className="social-icon"><i className="icon-instagram"></i></a>
            <a href="#" className="social-icon"><i className="icon-linkedin"></i></a>
            <a href="#" className="social-icon"><i className="icon-twitter"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Features</h3>
          <ul className="footer-list">
            <li><a href="#">Work management</a></li>
            <li><a href="#">Multi Tasking</a></li>
            <li><a href="#">Task editing</a></li>
            <li><a href="#">Custom Boards</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Mady by</h3>
          <div className="footer-app-links">
          <ul className="footer-list">
            <li><a href="#">Taha Ashfaq</a></li>
            <li><a href="#">Umar Javed</a></li>
          </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Powered by CSI</p>
      </div>
    </footer>
  );
}

export default Footer;

