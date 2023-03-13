import React from "react";
import "./Hero.css";
import heroImg from "../../../images/hero-img.png";

const Hero = () => {
  return (
    <div className="hero-section">

      <h1>Your Gateway to the Future of Finance</h1>
      <p>
        Step into the Buzzing World of Crypto with the Latest Trends and Market
        Data with <span className="logo-color">Crypto</span>Hive - Empowering
        You to Make Informed Decisions and Achieve Financial Success
      </p>
      <div className="img-wrapper">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
