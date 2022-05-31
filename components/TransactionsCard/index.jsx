import React from "react";
import DatePicker from "../DatePicker";
import TransactionRow from "../TransactionRow";
import TransactionRow2 from "../TransactionRow2";
import "./TransactionsCard.css";

function TransactionsCard(props) {
  const { title, transactionRow1Props, transactionRow2Props, transactionRow21Props, transactionRow22Props } = props;

  return (
    <div className="transactions-card">
      <div className="flex-row">
        <div className="title-2 valign-text-middle poppins-normal-heavy-metal-20px">{title}</div>
        <DatePicker />
      </div>
      <img className="divider" src="/img/divider@2x.svg" />
      <div className="list">
        <TransactionRow
          title={transactionRow1Props.title}
          date={transactionRow1Props.date}
          x000={transactionRow1Props.x000}
        />
        <TransactionRow
          title={transactionRow2Props.title}
          date={transactionRow2Props.date}
          x000={transactionRow2Props.x000}
          className={transactionRow2Props.className}
        />
        <TransactionRow2 x000={transactionRow21Props.x000} frameProps={transactionRow21Props.frameProps} />
        <TransactionRow2
          x000={transactionRow22Props.x000}
          className={transactionRow22Props.className}
          frameProps={transactionRow22Props.frameProps}
        />
      </div>
    </div>
  );
}

export default TransactionsCard;
