import React, { useEffect, useState } from "react";
import LineChart from "../charts/LineChart";

const balanceUrl = `${process.env.API_URL}profit-losses?sort=Month`;

function ProfitLossChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(balanceUrl, {headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}})
      .then(res => res.json())
      .then(
        (result) => {
          setData(result.data.map((item) => ({
            name: new Date(item.attributes.Month).toLocaleString('default', { month: 'long' }),
            profit: item.attributes.Profit,
            loss: item.attributes.Loss,
          })));
        },
        (error) => {
          console.log(error);
        }
      )
  }, []);

  return <LineChart data={data} lines={[{key: "profit", color: "#00A1E4"}, {key: "loss", color: "#FF6250"}]} />;
}

export default ProfitLossChart;
