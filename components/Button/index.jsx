import React from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./Button.css";

function Button({ text, iconName, style={} }) {
  function getIcon(iconName){
    switch(iconName){
      case "CheckCircleFilled": return <AntDesignIcons.CheckCircleFilled />;
      case "DollarCircleOutlined": return <AntDesignIcons.DollarCircleOutlined />;
      case "DollarCircleFilled": return <AntDesignIcons.DollarCircleFilled />;
      default: Error(`${iconName} icon not found`)
    }
  }

  const icon = getIcon(iconName);

  return (
    <div className="button" style={style}>
      <Antd.Button type="ghost" shape="default" size="large" disabled={false}>
        {icon}
        {text}
      </Antd.Button>
    </div>
  );
}

export default Button;
