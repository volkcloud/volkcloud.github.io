import React from "react";
import DeleteButton from "../DeleteButton";
import ApproveButton from "../ApproveButton";
import "./WireRow.css";

function WireRow(props) {
  const { text, value, className } = props;

  return (
    <div className={`wire-row-1 ${className || ""}`}>
      <div className="text valign-text-middle poppins-normal-heavy-metal-15px">{text}</div>
      <div className="right-content">
        <div className="value-1 valign-text-middle poppins-medium-heavy-metal-15px">{value}</div>
        <div className="actions">
          <DeleteButton />
          <ApproveButton />
        </div>
      </div>
    </div>
  );
}

export default WireRow;
