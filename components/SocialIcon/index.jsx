import React from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as Antd from "antd";
import "./SocialIcon.css";

function SocialIcon({ icon }) {
  return (
    <div className="social-icon">
      <Antd.Button type="ghost" shape="default" size="large" disabled={false}>
        {icon}
      </Antd.Button>
    </div>
  );
}

export default SocialIcon;
