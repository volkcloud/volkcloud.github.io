import React, { useEffect } from "react";
import * as Recharts from "recharts";
import "./BalanceChart.css";

function BalanceChart() {
  const args = {
    width: 370,
    height: 150,
    margin: { top: 0, right: 0, left: 0, bottom: 0 },
    fillColor: "#b7e9ff",
    strokeColor: "#00A1E4",
    dataKey: "blue",
    xAxisDataKey: "name",
    align: "center",
    verticalAlign: "bottom",
    data: [
      { name: "Jan", blue: 60 },
      { name: "Feb", blue: 200 },
      { name: "Mar", blue: 400 },
      { name: "Apr", blue: 208 },
      { name: "May", blue: 450 },
      { name: "Jun", blue: 550 },
    ],
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
