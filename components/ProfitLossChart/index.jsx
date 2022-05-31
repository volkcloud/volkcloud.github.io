import React, { useEffect, useState } from "react";
import * as Recharts from "recharts";
import "./ProfitLossChart.css";

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

  const args = {
    width: 370,
    height: 150,
    margin: { top: 0, right: 0, left: 0, bottom: 0 },
    line1Color: "#00A1E4",
    line2Color: "#FF6250",
    line1Key: "profit",
    line2Key: "loss",
    data: data,
    align: "center",
    verticalAlign: "bottom",
    ShowCartesianGrid: true,
    ShowXAxis: false,
    ShowYAxis: false,
    ShowTooltip: true,
    ShowLegend: false,
    xAxisDataKey: "",
    widgetCategory: "6216125a39298487a332afed",
    widgetCategoryName: "Charts",
  };

  return (
    <div className="simple-line-chart">
      <Recharts.LineChart {...args}>
        {args.ShowCartesianGrid && <Recharts.CartesianGrid strokeDasharray="3 3" />}
        <Recharts.XAxis dataKey="name" hide={!args.ShowXAxis} />
        <Recharts.YAxis hide={!args.ShowYAxis} />
        {args.ShowTooltip && <Recharts.Tooltip />}
        {args.ShowLegend && <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />}
        <Recharts.Line type="monotone" dataKey={args.line1Key} stroke={args.line1Color} dot={false} />
        <Recharts.Line type="monotone" dataKey={args.line2Key} stroke={args.line2Color} dot={false} />
      </Recharts.LineChart>
    </div>
  );
}

export default ProfitLossChart;
