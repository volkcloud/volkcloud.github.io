import * as Antd from "antd";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import React from "react";
import "./Button.css";

function Button({ text, icon, style = {} }) {
  return (
    <div className="button" style={style}>
      <Antd.Button
        type="ghost"
        shape="default"
        size="large"
        disabled={false}
        onClick={(e) => (window.location.href = "https://www.animaapp.com/")}
      >
        {icon}
        {text}
      </Antd.Button>
    </div>
  );
}

export default Button;
