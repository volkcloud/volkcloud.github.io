import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./Youtube.css";

function Youtube() {
  const args = {
    type: "ghost",
    shape: "default",
    size: "large",
    label: "",
    iconName: "YoutubeFilled",
    disabled: false,
    widgetCategory: "624efa35aaee3d33e70be415",
    widgetCategoryName: "Ant Design",
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
    width: 48,
    height: 40,
  };

  return (
    <div className="youtube">
      <Antd.Button type="ghost" shape="default" size="large" disabled={false}>
        <AntDesignIcons.YoutubeFilled />
      </Antd.Button>
    </div>
  );
}

export default Youtube;
