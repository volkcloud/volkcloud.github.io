import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./DeleteButton.css";

function DeleteButton() {
  const args = {
    type: "text",
    shape: "default",
    size: "large",
    label: "",
    iconName: "CloseCircleOutlined",
    disabled: false,
    widgetCategory: "624efa35aaee3d33e70be415",
    widgetCategoryName: "Ant Design",
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
    width: 48,
    height: 40,
  };

  return (
    <div className="delete-button">
      <Antd.Button type="text" shape="default" size="large" disabled={false}>
        <AntDesignIcons.CloseCircleOutlined />
      </Antd.Button>
    </div>
  );
}

export default DeleteButton;
