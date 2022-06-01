import React, { useEffect, useState } from "react";
import ForexChart from "../ForexChart";
import "./ForexCard.css";
import Button from "../Button";

const balanceUrl = `${process.env.API_URL}balance`;

function ForexCard({ title, currency, value2 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch(balanceUrl, {headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}})
      .then(res => res.json())
      .then(
        (result) => {
          setValue(result.data.attributes.Total);
        },
        (error) => {
          console.log(error);
        }
      )
  }, []);

  return (
    <div className="forex-card">
      <div className="title-7 valign-text-middle poppins-normal-heavy-metal-20px">{title}</div>
      <div className="value-2 valign-text-middle poppins-semi-bold-heavy-metal-40px">€{value.toLocaleString(undefined, {maximumFractionDigits:2})}</div>
      <div className="chart-details">
        <div className="forex-details poppins-normal-heavy-metal-20px">
          <div className="currency valign-text-middle">{currency}</div>
          <div className="value-3 valign-text-middle">{value2}</div>
        </div>
        <ForexChart />
      </div>
      <div className="forex-actions">
        <Button text="Sell | $1.079" iconName="DollarCircleOutlined" style={{"margin-right": "5px"}} />
        <Button text="Buy | $1.081" iconName="DollarCircleFilled" style={{"margin-left": "5px"}} />
      </div>
    </div>
  );
}

export default ForexCard;
