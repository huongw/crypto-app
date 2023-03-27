import React from "react";
import "./Hero.css";
import heroImg from "../../../images/hero-img.png";

const Hero = () => {
  return (
    <div className="hero-section">
      <h1>
        Welcome to <span className="logo-color">Crypto</span> Hive!
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
        repudiandae ullam voluptatibus ad incidunt quo magni tempore illo beatae
        officia inventore ducimus sapiente numquam, ex eveniet harum amet.
        Asperiores, harum?
      </p>
      <div className="img-wrapper">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
