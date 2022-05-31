import React from "react";
import "./Frame.css";

function Frame(props) {
  const { date } = props;

  return (
    <div className="frame-1">
      <div className="title-4 valign-text-middle poppins-normal-heavy-metal-15px">Stripe</div>
      <div className="date-1 valign-text-middle poppins-normal-heavy-metal-12px">{date}</div>
    </div>
  );
}

export default Frame;
