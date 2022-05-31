import React, { useEffect, useState } from "react";
import * as Recharts from "recharts";

const balanceUrl = `${process.env.API_URL}balance-histories?sort=Month`;

function BalanceChart() {
  const [data, setData] = useState([]);

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

  const args = {
    width: 370,
    height: 140,
    margin: { top: 0, right: 0, left: 0, bottom: 0 },
    fillColor: "#b7e9ff",
    strokeColor: "#00A1E4",
    dataKey: "balance",
    xAxisDataKey: "name",
    align: "center",
    verticalAlign: "bottom",
    data: data,
    ShowCartesianGrid: false,
    ShowXAxis: false,
    ShowYAxis: false,
    ShowTooltip: true,
    ShowLegend: false,
    widgetCategory: "6216125a39298487a332afed",
    widgetCategoryName: "Charts",
  };

  return (
    <div className="balance-chart">
      <Recharts.AreaChart {...args}>
        {args.ShowCartesianGrid && <Recharts.CartesianGrid strokeDasharray="3 3" />}
        <Recharts.XAxis dataKey={args.xAxisDataKey} hide={!args.ShowXAxis} />
        <Recharts.YAxis hide={!args.ShowYAxis} />
        {args.ShowTooltip && <Recharts.Tooltip />}
        {args.ShowLegend && <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />}
        <Recharts.Area type="monotone" dataKey={args.dataKey} stroke={args.strokeColor} fill={args.fillColor} />
      </Recharts.AreaChart>
    </div>
  );
}

export default BalanceChart;
