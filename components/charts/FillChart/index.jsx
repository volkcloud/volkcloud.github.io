import React from "react";
import * as Recharts from "recharts";

function FillChart({ data, dataKey, height, tooltip }) {
  const args = {
    width: 370,
    height: height,
    margin: { top: 0, right: 0, left: 0, bottom: 0 },
    fillColor: "#b7e9ff",
    strokeColor: "#00A1E4",
    dataKey: dataKey,
    xAxisDataKey: "name",
    align: "center",
    verticalAlign: "bottom",
    data: data,
    ShowCartesianGrid: false,
    ShowXAxis: false,
    ShowYAxis: false,
    ShowTooltip: tooltip,
    ShowLegend: false,
    widgetCategory: "6216125a39298487a332afed",
    widgetCategoryName: "Charts",
  };

  return (
    <div className="fill-chart">
      <Recharts.AreaChart {...args}>
        {args.ShowCartesianGrid && (
          <Recharts.CartesianGrid strokeDasharray="3 3" />
        )}
        <Recharts.XAxis dataKey={args.xAxisDataKey} hide={!args.ShowXAxis} />
        <Recharts.YAxis hide={!args.ShowYAxis} />
        {args.ShowTooltip && <Recharts.Tooltip />}
        {args.ShowLegend && (
          <Recharts.Legend
            align={args.align}
            verticalAlign={args.verticalAlign}
          />
        )}
        <Recharts.Area
          type="monotone"
          dataKey={args.dataKey}
          stroke={args.strokeColor}
          fill={args.fillColor}
        />
      </Recharts.AreaChart>
    </div>
  );
}

export default FillChart;
