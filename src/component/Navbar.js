import React, { useState } from "react";
import "../style/Navbar.scss";
import icon_menu_close from "../assets/images/icon-close-menu.svg";
import icon_menu from "../assets/images/icon-menu.svg";
import icon_arrow_down from "../assets/images/icon-arrow-down.svg";
import icon_arrow_up from "../assets/images/icon-arrow-up.svg";
import Submenu_1 from "./Submenu_1";
import Submenu_2 from "./Submenu_2";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [feature, setFeature] = useState(false);
  const [company, setCompany] = useState(false);
  return (
    <header>
      <div className="logo">
        <h1>
          <a href="#">snap</a>
        </h1>
      </div>
      <nav className={menu ? "active" : ""}>
        <ul>
          <li className="menu" onClick={() => setFeature(!feature)}>
            <div className="sub-txt">
              <a href="#feature">Features</a>
            </div>
            {feature ? (
              <div className="sub-icon">
                <img src={icon_arrow_up} alt="" />
              </div>
            ) : (
              <div className="sub-icon">
                <img src={icon_arrow_down} alt="" />
              </div>
            )}
            {feature && <Submenu_1 />}
          </li>
          <li className="menu" onClick={() => setCompany(!company)}>
            <div className="sub-txt">
              <a href="#company">Company</a>
            </div>
            {company ? (
              <div className="sub-icon">
                <img src={icon_arrow_up} alt="" />
              </div>
            ) : (
              <div className="sub-icon">
                <img src={icon_arrow_down} alt="" />
              </div>
            )}
            {company && <Submenu_2 />}
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>

        <div className="button">
          <button className="btn log">
            <a href="#">Login</a>
          </button>
          <button className="btn reg">
            <a href="#">Register</a>
          </button>
        </div>
      </nav>
      <div className="menu-icon" onClick={() => setMenu(!menu)}>
        {menu ? (
          <div className="icon close">
            <img src={icon_menu_close} alt="close" />
          </div>
        ) : (
          <div className="icon menu">
            <img src={icon_menu} alt="navigation" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
