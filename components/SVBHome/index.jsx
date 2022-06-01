import React from "react";
import AnimaCard from "../AnimaCard";
import BalanceCard from "../BalanceCard";
import ForexCard from "../ForexCard";
import PLCard from "../PLCard";
import SideBar from "../SideBar";
import TransactionsCard from "../TransactionsCard";
import WiresCard from "../WiresCard";
import "./SVBHome.css";

function SVBHome() {
  return (
    <div className="container-center-horizontal">
      <div className="svb-home screen">
        <SideBar />
        <div className="content">
          <div className="card-container">
            <BalanceCard title="Balance" />
            <PLCard title="Profit & Loss" comment="Runway: Infinite" />
            <TransactionsCard title="Transactions" />
          </div>
          <div className="card-container-1">
            <WiresCard title="Pending wires" />
            <AnimaCard
              title="Built with Anima"
              text={
                <React.Fragment>
                  R&amp;D teams build cloud apps 10x faster with Anima. <br />
                  Turn Figma / Adobe XD / Sketch to React code.
                  <br />
                  We make developers &amp; designers happier.
                </React.Fragment>
              }
            />
            <ForexCard title="Forex account - EUR" currency="EUR:USD" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SVBHome;
