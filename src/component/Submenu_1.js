import React from "react";
import "../style/Submenu.scss";
import { feature } from "./List/Feature";
const Submenu_1 = () => {
  return (
    <ul className="submenu feature-sub">
      {feature.map((list, ind) => {
        return (
          <li key={ind}>
            <div className="sub-icon">
              <img src={list.img} alt="" />
            </div>
            <div>
              <a href={`#` + list.title}>{list.title}</a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Submenu_1;
