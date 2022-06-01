import React from "react";
import * as Recharts from "recharts";
import "./LineChart.css";

function LineChart({ data, lines }) {
  const args = {
    width: 370,
    height: 150,
    margin: { top: 0, right: 0, left: 0, bottom: 0 },
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
        {args.ShowCartesianGrid && (
          <Recharts.CartesianGrid strokeDasharray="3 3" />
        )}
        <Recharts.XAxis dataKey="name" hide={!args.ShowXAxis} />
        <Recharts.YAxis hide={!args.ShowYAxis} />
        {args.ShowTooltip && <Recharts.Tooltip />}
        {args.ShowLegend && (
          <Recharts.Legend
            align={args.align}
            verticalAlign={args.verticalAlign}
          />
        )}
        {lines.map((line) => (
          <Recharts.Line
            type="monotone"
            key={line.key}
            dataKey={line.key}
            stroke={line.color}
            dot={false}
          />
        ))}
      </Recharts.LineChart>
    </div>
  );
}

export default LineChart;
