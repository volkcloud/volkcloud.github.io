import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <div className="menu-1">
        <Antd.Menu
          style={{
            width: 200,
          }}
          theme="light"
        >
          <Antd.Menu.Item key="508" icon={<AntDesignIcons.BarChartOutlined />} onClick={e =>  window.location.href='https://www.animaapp.com/'}>
            Dashboard
          </Antd.Menu.Item>

          <Antd.Menu.Item key="767" icon={<AntDesignIcons.UserOutlined />} onClick={e =>  window.location.href='https://www.animaapp.com/'}>
            Account
          </Antd.Menu.Item>

          <Antd.Menu.Item key="422" icon={<AntDesignIcons.SettingOutlined />} onClick={e =>  window.location.href='https://www.animaapp.com/'}>
            Settings
          </Antd.Menu.Item>

          <Antd.Menu.ItemGroup key="g543" title="Support">
            <Antd.Menu.Item
              key="873"
              icon={<AntDesignIcons.WechatFilled />}
              style={{ marginTop: "20px" }}
              onClick={e =>  window.location.href='https://www.animaapp.com/'}
            >
              Chat
            </Antd.Menu.Item>

            <Antd.Menu.Item
              key="179"
              icon={<AntDesignIcons.QuestionCircleFilled />}
              onClick={e =>  window.location.href='https://www.animaapp.com/'}
            >
              FAQ
            </Antd.Menu.Item>
            <Antd.Menu.Divider />
          </Antd.Menu.ItemGroup>
        </Antd.Menu>
      </div>
    </div>
  );
}

export default Menu;
