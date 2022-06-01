import React from "react";
import FillChart from "../charts/FillChart";

function ForexChart() {
  const data = [
    { name: "Jan", amount: 60 },
    { name: "Feb", amount: 20 },
    { name: "Mar", amount: 400 },
    { name: "Apr", amount: 208 },
    { name: "May", amount: 450 },
    { name: "Jun", amount: 550 },
  ];

  return <FillChart data={data} dataKey="amount" height={80} tooltip={false} />;
}

export default ForexChart;
