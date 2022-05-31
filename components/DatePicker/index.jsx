import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./DatePicker.css";

function DatePicker() {
  const args = {
    allowClear: true,
    placeholder: "Select date",
    type: "date",
    status: "default",
    size: "middle",
    format: "MM/DD/YY",
    bordered: false,
    showToday: true,
    disabled: false,
    widgetCategory: "624efa35aaee3d33e70be415",
    widgetCategoryName: "Ant Design",
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
    width: 155,
    height: 32,
  };

  return (
    <div className="date-picker">
      <Antd.DatePicker
        picker="date"
        size="middle"
        placeholder="Select date"
        status="default"
        disabled={false}
        bordered={false}
        showToday
        format="MM/DD/YY"
        allowClear
      ></Antd.DatePicker>
    </div>
  );
}

export default DatePicker;
