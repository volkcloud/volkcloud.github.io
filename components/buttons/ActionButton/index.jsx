import * as Antd from "antd";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import React from "react";
import "./ActionButton.css";

function ActionButton({ icon }) {
  return (
    <div className="approve-button">
      <Antd.Button type="text" shape="default" size="large" disabled={false}>
        {icon}
      </Antd.Button>
    </div>
  );
}

export default ActionButton;
