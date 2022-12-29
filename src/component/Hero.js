import React from "react";
import hero_desktop from "../assets/images/image-hero-desktop.png";
import databiz from "../assets/images/client-databiz.svg";
import audio from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";
import "../style/Hero.scss";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h2>Make Remote Work</h2>
        <p>
          Get your team in sync, no matter your location. Streamline processes, create
          team rituals, and watch productivity soar.
        </p>
        <button className="dark-btn">Learn more</button>
        <div className="hero-client">
          <img src={databiz} alt="client databiz" />
          <img src={audio} alt="client databiz" />
          <img src={meet} alt="client databiz" />
          <img src={maker} alt="client databiz" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_desktop} alt="man using laptop" />
      </div>
    </section>
  );
};

export default Hero;
