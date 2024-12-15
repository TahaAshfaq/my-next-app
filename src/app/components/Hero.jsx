import React from 'react';
import styles from "../styles/hero.css";
import Group21 from "../media/Group21.svg";
import Image from "next/image";

function Hero() {
  return (
    <div className="heropre">
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Manage your work like <span className="hero-highlight">Jimmy</span>
        </h1>
        <p className="hero-description">
          This is just a university project forget about managing work please hire me
        </p>
        <button className="btn-large">Try workly</button>
      </div>
      <div className="hero-image">
         <Image src={Group21} alt="" width={1000} height={1000}/>
      </div>
    </section>
    </div>
  );
}

export default Hero;

