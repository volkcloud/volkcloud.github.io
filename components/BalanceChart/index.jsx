import React, { useEffect, useState } from "react";
import FillChart from "../charts/FillChart";

const balanceUrl = `${process.env.API_URL}balance-histories?sort=Month`;

function BalanceChart() {
  const [data, setData] = useState([{name:"January", balance: 0}]);

  useEffect(() => {
    fetch(balanceUrl, {headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}})
      .then(res => res.json())
      .then(
        (result) => {
          setData(result.data.map((item) => ({
            name: new Date(item.attributes.Month).toLocaleString('default', { month: 'long' }),
            balance: item.attributes.Total,
          })));
        },
        (error) => {
          console.log(error);
        }
      )
  }, []);

  return <FillChart data={data} dataKey="balance" height={140} tooltip={true} />;
}

export default BalanceChart;
