import React, { useEffect, useState } from "react";
import DatePicker from "../DatePicker";
import TransactionRow from "../TransactionRow";
import "./TransactionsCard.css";

const tranasctionsUrl = `${process.env.API_URL}transactions`;

function TransactionsCard({ title }) {
  const [transactions, setTransactions] = useState([{name:"January", balance: 0}]);

  useEffect(() => {
    fetch(tranasctionsUrl, {headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}})
      .then(res => res.json())
      .then(
        (result) => {
          setTransactions(result.data.map((item) => ({
            date: item.attributes.Date,
            name: item.attributes.Name,
            amount: item.attributes.Amount,
          })));
        },
        (error) => {
          console.log(error);
        }
      )
  }, []);

  return (
    <div className="transactions-card">
      <div className="flex-row">
        <div className="title-2 valign-text-middle poppins-normal-heavy-metal-20px">{title}</div>
        <DatePicker />
      </div>
      <img className="divider" src="/img/divider@2x.svg" />
      <div className="list">
        {transactions.map((transaction) => (<TransactionRow
          title={transaction.name}
          date={transaction.date}
          value={transaction.amount}
        />))}
      </div>
    </div>
  );
}

export default TransactionsCard;
