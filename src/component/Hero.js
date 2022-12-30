import React from "react";
import hero_desktop from "../assets/images/image-hero-desktop.png";
import hero_mobile from "../assets/images/image-hero-mobile.png";
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
          <ul>
            <li className="clent-img">
              <img src={databiz} alt="client databiz" />
            </li>
            <li className="clent-img">
              <img src={audio} alt="client databiz" />
            </li>
            <li className="clent-img">
              <img src={meet} alt="client databiz" />
            </li>
            <li className="clent-img">
              <img src={maker} alt="client databiz" />
            </li>
          </ul>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_desktop} className="desktop-img" alt="man using laptop" />
        <img src={hero_mobile} className="mobile-img" alt="man using laptop" />
      </div>
    </section>
  );
};

export default Hero;
