import React, { useEffect, useState } from "react";
import BalanceChart from "../BalanceChart";
import "./BalanceCard.css";

const balanceUrl = `${process.env.API_URL}balance`;

function BalanceCard({ title }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch(balanceUrl, {
      headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setValue(result.data.attributes.Amount);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="balance-card">
      <div className="title valign-text-middle poppins-normal-heavy-metal-20px">
        {title}
      </div>
      <h1 className="value valign-text-middle poppins-semi-bold-heavy-metal-40px">
        ${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}
      </h1>
      <BalanceChart />
    </div>
  );
}

export default BalanceCard;
