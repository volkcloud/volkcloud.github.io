import React from "react";
import Menu from "../Menu";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="side-bar">
      <img className="svb-cleaned-logo" src="img/svb-cleaned-logo@2x.svg" />
      <Menu />
    </div>
  );
}

export default SideBar;
