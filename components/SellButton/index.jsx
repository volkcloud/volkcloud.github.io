import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./SellButton.css";

function SellButton() {
  const args = {
    type: "ghost",
    shape: "default",
    size: "large",
    label: "Sell | $1.079",
    iconName: "DollarCircleOutlined",
    disabled: false,
    widgetCategory: "624efa35aaee3d33e70be415",
    widgetCategoryName: "Ant Design",
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
    width: 148,
    height: 40,
  };

  return (
    <div className="sell-button">
      <Antd.Button type="ghost" shape="default" size="large" disabled={false}>
        <AntDesignIcons.DollarCircleOutlined />
        Sell | $1.079
      </Antd.Button>
    </div>
  );
}

export default SellButton;
