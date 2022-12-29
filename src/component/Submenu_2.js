import React from "react";
import "../style/Submenu.scss";
import Company from "./List/Company.json";
const Submenu_1 = () => {
  return (
    <ul className="submenu company-sub">
      {Company.map((list, ind) => {
        return (
          <li key={ind}>
            <a href={`#` + list.title}>{list.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Submenu_1;
