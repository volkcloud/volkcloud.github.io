import * as Antd from "antd";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import React from "react";
import "./DatePicker.css";

function DatePicker({ onChange }) {
  return (
    <div className="date-picker">
      <Antd.DatePicker
        onChange={onChange}
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
