import React from "react";
import "../App.css";
import { Button } from "./Button";
import { Button1 } from "./Button1";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/pexels2.mp4" autoPlay loop muted />
      <h1>Lithuania's</h1>
      <div className="hero-btns">
        <Button1
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Capital's Weather Information{" "}
          <i className="fa-solid fa-arrow-right"></i>
        </Button1>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Top 5 Websites <i className="fa-solid fa-arrow-right"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
