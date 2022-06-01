import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as Antd from "antd";
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
