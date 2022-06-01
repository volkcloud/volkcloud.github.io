import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SVBHome from "./components/SVBHome";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|svb-home)">
          <SVBHome
            balanceCardProps={sVBHomeData.balanceCardProps}
            pLCardProps={sVBHomeData.pLCardProps}
            transactionsCardProps={sVBHomeData.transactionsCardProps}
            wiresCardProps={sVBHomeData.wiresCardProps}
            animaCardProps={sVBHomeData.animaCardProps}
            forexCardProps={sVBHomeData.forexCardProps}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const balanceCardData = {
  title: "Balance",
};

const pLCardData = {
  title: "Profit & Loss",
  comment: "Runway: Infinite",
};

const transactionRow1Data = {
  title: "Stripe",
  date: "June 2, 2022",
  x000: "$53,777",
};

const transactionRow2Data = {
  title: "Gusto",
  date: "June 1, 2022",
  x000: "-$520,000",
  className: "transaction-row-1",
};

const frame1Data = {
  date: "May 30, 2022",
};

const transactionRow22Data = {
  x000: "$38,125",
  frameProps: frame1Data,
};

const frame2Data = {
  date: "May 29, 2022",
};

const transactionRow23Data = {
  x000: "$68,127",
  className: "transaction-row-2",
  frameProps: frame2Data,
};

const transactionsCardData = {
  title: "Transactions",
  transactionRow1Props: transactionRow1Data,
  transactionRow2Props: transactionRow2Data,
  transactionRow21Props: transactionRow22Data,
  transactionRow22Props: transactionRow23Data,
};

const wiresCardData = {
  title: "Pending wires",
};

const animaCardData = {
  title: "Built with Anima",
  text: (
    <React.Fragment>
      R&amp;D teams build cloud apps 10x faster with Anima. <br />
      Turn Figma / Adobe XD / Sketch to React code.
      <br />
      We make developers &amp; designers happier.
    </React.Fragment>
  ),
};

const forexCardData = {
  title: "Forex account - EUR",
  value1: "€20,000",
  currency: "EUR:USD",
  value2: "$1.08",
};

const sVBHomeData = {
  balanceCardProps: balanceCardData,
  pLCardProps: pLCardData,
  transactionsCardProps: transactionsCardData,
  wiresCardProps: wiresCardData,
  animaCardProps: animaCardData,
  forexCardProps: forexCardData,
};
