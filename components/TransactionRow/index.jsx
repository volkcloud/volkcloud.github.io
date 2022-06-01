import React from "react";
import "./TransactionRow.css";

function TransactionRow({ title, date, value }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedValue = parseFloat(value).toFixed(2);

  return (
    <div className="transaction-row">
      <div className="frame">
        <div className="title-3 valign-text-middle poppins-normal-heavy-metal-15px">
          {title}
        </div>
        <div className="date valign-text-middle poppins-normal-heavy-metal-12px">
          {formattedDate}
        </div>
      </div>
      <div className="x000 valign-text-middle poppins-medium-heavy-metal-15px">
        ${formattedValue}
      </div>
    </div>
  );
}

export default TransactionRow;
