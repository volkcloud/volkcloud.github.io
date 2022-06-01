import * as Antd from "antd";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import React from "react";
import "./SocialIcon.css";

function SocialIcon({ icon, url }) {
  return (
    <div className="social-icon">
      <Antd.Button
        type="ghost"
        shape="default"
        size="large"
        disabled={false}
        onClick={(e) => (window.location.href = url)}
      >
        {icon}
      </Antd.Button>
    </div>
  );
}

export default SocialIcon;
