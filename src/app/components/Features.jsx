import React from 'react';
import styles from "../styles/features.css";
import Frame from "../media/Frame 264.svg";
import Framee from "../media/Frame 265.svg";
import Frameee from "../media/Frame 266.svg";

import Image from "next/image";

function Features() {
  return (
    <div className="featurespre">
    <section className="features" id="why-us">
      <h2 className="features-title">Why Choose Us</h2>
      <p className="features-description">
        Workly is a free to use workflow management software that uses multiple templates to make the overall management experience fun and fast
      </p>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="icon-grid"><Image src={Frameee} alt="" /></i>
          </div>
          <h3 className="feature-card-title">Build your own board</h3>
          <p className="feature-card-description">
            Make your custom boards by selecting columns that fit your requirements
          </p>
          <button className="feature-button">Custom boards</button>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <i className="icon-file"><Image src={Frame} alt="" /></i>
          </div>
          <h3 className="feature-card-title">Select a template</h3>
          <p className="feature-card-description">
            Select the suitable template that aligns with your workflow
          </p>
          <button className="feature-button">Kanban cards or a simple view</button>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <i className="icon-list"><Image src={Framee} alt="" /></i>
          </div>
          <h3 className="feature-card-title">Manage</h3>
          <p className="feature-card-description">
            Build multiple tasks and assign them to your team members and manage them
          </p>
          <button className="feature-button">Make and manage tasks</button>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Features;

