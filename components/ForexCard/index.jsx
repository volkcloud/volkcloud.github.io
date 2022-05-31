import React from "react";
import ForexChart from "../ForexChart";
import SellButton from "../SellButton";
import BuyButton from "../BuyButton";
import "./ForexCard.css";

function ForexCard(props) {
  const { title, value1, currency, value2 } = props;

  return (
    <div className="forex-card">
      <div className="title-7 valign-text-middle poppins-normal-heavy-metal-20px">{title}</div>
      <div className="value-2 valign-text-middle poppins-semi-bold-heavy-metal-40px">{value1}</div>
      <div className="chart-details">
        <div className="forex-details poppins-normal-heavy-metal-20px">
          <div className="currency valign-text-middle">{currency}</div>
          <div className="value-3 valign-text-middle">{value2}</div>
        </div>
        <ForexChart />
      </div>
      <div className="forex-actions">
        <SellButton />
        <BuyButton />
      </div>
    </div>
  );
}

export default ForexCard;
