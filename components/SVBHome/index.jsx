import React from "react";
import SideBar from "../SideBar";
import BalanceCard from "../BalanceCard";
import PLCard from "../PLCard";
import TransactionsCard from "../TransactionsCard";
import WiresCard from "../WiresCard";
import AnimaCard from "../AnimaCard";
import ForexCard from "../ForexCard";
import "./SVBHome.css";

function SVBHome(props) {
  const {
    balanceCardProps,
    pLCardProps,
    transactionsCardProps,
    wiresCardProps,
    animaCardProps,
    forexCardProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="svb-home screen">
        <SideBar />
        <div className="content">
          <div className="card-container">
            <BalanceCard title={balanceCardProps.title} value={balanceCardProps.value} />
            <PLCard title={pLCardProps.title} comment={pLCardProps.comment} />
            <TransactionsCard
              title={transactionsCardProps.title}
            />
          </div>
          <div className="card-container-1">
            <WiresCard
              title={wiresCardProps.title}
              wireRow1Props={wiresCardProps.wireRow1Props}
              wireRow2Props={wiresCardProps.wireRow2Props}
              wireRow3Props={wiresCardProps.wireRow3Props}
            />
            <AnimaCard title={animaCardProps.title} text={animaCardProps.text} />
            <ForexCard
              title={forexCardProps.title}
              value1={forexCardProps.value1}
              currency={forexCardProps.currency}
              value2={forexCardProps.value2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SVBHome;
