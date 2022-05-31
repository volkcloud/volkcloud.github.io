import React from "react";
import BalanceChart from "../BalanceChart";
import "./BalanceCard.css";

function BalanceCard(props) {
  const { title, value } = props;

  return (
    <div className="balance-card">
      <div className="title valign-text-middle poppins-normal-heavy-metal-20px">{title}</div>
      <h1 className="value valign-text-middle poppins-semi-bold-heavy-metal-40px">{value}</h1>
      <BalanceChart />
    </div>
  );
}

export default BalanceCard;
