import * as AntDesignIcons from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Button from "../buttons/Button";
import ForexChart from "../ForexChart";
import "./ForexCard.css";

const balanceUrl = `${process.env.API_URL}forex-balance`;
const rateUrl = `${process.env.API_URL}forex-rate`;
const buyRateUrl = `${process.env.API_URL}forex-buy-rate`;
const sellRateUrl = `${process.env.API_URL}forex-sell-rate`;

function ForexCard({ title, currency }) {
  const [balance, setBalance] = useState(0);
  const [rate, setRate] = useState(0);
  const [buyRate, setBuyRate] = useState(0);
  const [sellRate, setSellRate] = useState(0);

  function getValue(url, func) {
    fetch(url, {
      headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          func(result.data.attributes.Amount);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  useEffect(() => {
    getValue(balanceUrl, setBalance);
    getValue(rateUrl, setRate);
    getValue(sellRateUrl, setSellRate);
    getValue(buyRateUrl, setBuyRate);
  }, []);

  return (
    <div className="forex-card">
      <div className="title-7 valign-text-middle poppins-normal-heavy-metal-20px">
        {title}
      </div>
      <div className="value-2 valign-text-middle poppins-semi-bold-heavy-metal-40px">
        €{balance.toLocaleString(undefined, { maximumFractionDigits: 2 })}
      </div>
      <div className="chart-details">
        <div className="forex-details poppins-normal-heavy-metal-20px">
          <div className="currency valign-text-middle">{currency}</div>
          <div className="value-3 valign-text-middle">{rate}</div>
        </div>
        <ForexChart />
      </div>
      <div className="forex-actions">
        <Button
          text={`Sell | $${sellRate}`}
          icon={<AntDesignIcons.DollarCircleOutlined />}
          style={{ marginRight: "5px" }}
        />
        <Button
          text={`Buy | $${buyRate}`}
          icon={<AntDesignIcons.DollarCircleFilled />}
          style={{ marginLeft: "5px" }}
        />
      </div>
    </div>
  );
}

export default ForexCard;
