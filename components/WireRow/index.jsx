import React from "react";
import DeleteButton from "../DeleteButton";
import ApproveButton from "../ApproveButton";
import "./WireRow.css";

function WireRow({ text, value }) {
  const formattedValue = parseFloat(value).toFixed(2);

  return (
    <div className="wire-row-1">
      <div className="text valign-text-middle poppins-normal-heavy-metal-15px">{text}</div>
      <div className="right-content">
        <div className="value-1 valign-text-middle poppins-medium-heavy-metal-15px">${formattedValue}</div>
        <div className="actions">
          <DeleteButton />
          <ApproveButton />
        </div>
      </div>
    </div>
  );
}

export default WireRow;
