import React from "react";
import SimpleLineChart from "../SimpleLineChart";
import "./PLCard.css";

function PLCard(props) {
  const { title, comment } = props;

  return (
    <div className="pl-card">
      <div className="title-1 valign-text-middle poppins-normal-heavy-metal-20px">{title}</div>
      <SimpleLineChart />
      <div className="comment valign-text-middle">{comment}</div>
    </div>
  );
}

export default PLCard;
