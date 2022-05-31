import React from "react";
import "./TransactionRow.css";

function TransactionRow(props) {
  const { title, date, x000, className } = props;

  return (
    <div className={`transaction-row ${className || ""}`}>
      <div className="frame">
        <div className="title-3 valign-text-middle poppins-normal-heavy-metal-15px">{title}</div>
        <div className="date valign-text-middle poppins-normal-heavy-metal-12px">{date}</div>
      </div>
      <div className="x000 valign-text-middle poppins-medium-heavy-metal-15px">{x000}</div>
    </div>
  );
}

export default TransactionRow;
