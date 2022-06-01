import React, { useEffect, useState } from "react";
import FillChart from "../charts/FillChart";

const forexUrl = `${process.env.API_URL}forex-balance-histories?sort=Month`;

function ForexChart() {
  const [data, setData] = useState([{name:"January", amount: 0}]);

  useEffect(() => {
    fetch(forexUrl, {headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}})
      .then(res => res.json())
      .then(
        (result) => {
          setData(result.data.map((item) => ({
            name: new Date(item.attributes.Month).toLocaleString('default', { month: 'long' }),
            amount: item.attributes.Amount,
          })));
        },
        (error) => {
          console.log(error);
        }
      )
  }, []);

  return <FillChart data={data} dataKey="amount" height={80} tooltip={false} />;
}

export default ForexChart;
