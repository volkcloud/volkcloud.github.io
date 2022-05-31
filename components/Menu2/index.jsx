import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./Menu2.css";

function Menu2() {
  const args = {
    width: 200,
    theme: "light",
    menuitem: { itemTitle: "Home", includeDivider: true, iconName: "HomeOutlined", itemKey: "1" },
    menuitem2: { itemTitle: "Dashboard", includeDivider: false, iconName: "BarChartOutlined", itemKey: "1" },
    menuitem3: { itemTitle: "Account", includeDivider: true, iconName: "UserOutlined", itemKey: "1" },
    menuitemgroup: {
      itemGroupTitle: "Customers",
      includeDivider: false,
      groupKey: "g1",
      menuitem: { itemTitle: "List", includeDivider: false, iconName: "TeamOutlined", itemKey: "1" },
      menuitem2: { itemTitle: "Purchases", includeDivider: true, iconName: "DollarOutlined", itemKey: "1" },
    },
    widgetCategory: "624d61f0c66c720e4a179cf5",
    widgetCategoryName: "Vertical menu",
    iconName: "SettingOutlined",
    itemTitle: "FAQ",
    menuitem5194: { itemTitle: "Item", includeDivider: true, iconName: "HomeOutlined", itemKey: "1" },
    menuitem6691: { itemTitle: "Orders", includeDivider: true, iconName: "ShoppingCartOutlined", itemKey: "1" },
    menuitem7470: { itemTitle: "Account", includeDivider: false, iconName: "UserOutlined", itemKey: "1" },
    menuitem9109: { itemTitle: "Settings", includeDivider: false, iconName: "SettingOutlined", itemKey: "1" },
    menuitemgroup9871: {
      itemGroupTitle: "Support",
      includeDivider: false,
      groupKey: "g1",
      menuitem: { itemTitle: "Chat", includeDivider: false, iconName: "WechatFilled", itemKey: "1" },
      menuitem2: { itemTitle: "FAQ", includeDivider: true, iconName: "QuestionCircleFilled", itemKey: "1" },
    },
    includeDivider: false,
    itemGroupTitle: "Support",
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";} .ant-menu-dark .ant-menu-item-divider { border-color: #ffffff;} .ant-menu.ant-menu-dark {background: #151718;}',
    height: 287,
  };

  return (
    <div className="menu-1">
      <Antd.Menu
        style={{
          width: 200,
        }}
        theme="light"
      >
        <Antd.Menu.Item key="508" icon={<AntDesignIcons.BarChartOutlined />}>
          Dashboard
        </Antd.Menu.Item>

        <Antd.Menu.Item key="767" icon={<AntDesignIcons.UserOutlined />}>
          Account
        </Antd.Menu.Item>

        <Antd.Menu.Item key="422" icon={<AntDesignIcons.SettingOutlined />}>
          Settings
        </Antd.Menu.Item>

        <Antd.Menu.ItemGroup key="g543" title="Support">
          <Antd.Menu.Item key="873" icon={<AntDesignIcons.WechatFilled />}>
            Chat
          </Antd.Menu.Item>

          <Antd.Menu.Item key="179" icon={<AntDesignIcons.QuestionCircleFilled />}>
            FAQ
          </Antd.Menu.Item>
          <Antd.Menu.Divider />
        </Antd.Menu.ItemGroup>
      </Antd.Menu>
    </div>
  );
}

export default Menu2;
