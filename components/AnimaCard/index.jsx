import React from "react";
import Medium from "../Medium";
import Youtube from "../Youtube";
import Github from "../Github";
import "./AnimaCard.css";

function AnimaCard(props) {
  const { title, text } = props;

  return (
    <div className="anima-card">
      <div className="text-frame">
        <div className="title-6 valign-text-middle poppins-normal-heavy-metal-20px">{title}</div>
        <img className="divider-2" src="/img/divider-2@2x.svg" />
        <p className="text-1 poppins-normal-heavy-metal-15px">{text}</p>
      </div>
      <div className="logos-frame">
        <div className="anima-logo">
          <img className="logo" src="/img/logo@2x.svg" />
        </div>
        <div className="social">
          <Medium />
          <Youtube />
          <Github />
        </div>
      </div>
    </div>
  );
}

export default AnimaCard;
