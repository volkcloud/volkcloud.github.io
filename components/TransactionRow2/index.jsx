import React from "react";
import Frame from "../Frame";
import "./TransactionRow2.css";

function TransactionRow2(props) {
  const { x000, className, frameProps } = props;

  return (
    <div className={`transaction-row-2-1 ${className || ""}`}>
      <Frame date={frameProps.date} />
      <div className="x000-1 valign-text-middle poppins-medium-heavy-metal-15px">{x000}</div>
    </div>
  );
}

export default TransactionRow2;
