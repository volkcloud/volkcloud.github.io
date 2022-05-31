import React, { useEffect } from "react";
import * as Recharts from "recharts";
import "./SimpleLineChart.css";

function SimpleLineChart() {
  const args = {
    width: 370,
    height: 150,
    margin: { top: 0, right: 0, left: 0, bottom: 0 },
    line1Color: "#00A1E4",
    line2Color: "#FF6250",
    line1Key: "blue",
    line2Key: "green",
    data: [
      { name: "A", blue: 60, green: 240 },
      { name: "B", blue: 200, green: 139 },
      { name: "C", blue: 400, green: 200 },
      { name: "D", blue: 300, green: 220 },
      { name: "E", blue: 450, green: 300 },
      { name: "F", blue: 600, green: 380 },
    ],
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

export default SimpleLineChart;
