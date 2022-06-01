import React from "react";
import ProfitLossChart from "../ProfitLossChart";
import "./PLCard.css";

function PLCard({ title, comment }) {
  return (
    <div className="pl-card">
      <div className="title-1 valign-text-middle poppins-normal-heavy-metal-20px">
        {title}
      </div>
      <ProfitLossChart />
      <div className="comment valign-text-middle">{comment}</div>
    </div>
  );
}

export default PLCard;
