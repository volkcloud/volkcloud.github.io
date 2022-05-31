import React from "react";
import Button from "../Button";
import WireRow from "../WireRow";
import "./WiresCard.css";

function WiresCard(props) {
  const { title, wireRow1Props, wireRow2Props, wireRow3Props } = props;

  return (
    <div className="wires-card">
      <div className="overlap-group">
        <div className="title-frame">
          <div className="title-5 valign-text-middle poppins-normal-heavy-metal-20px">{title}</div>
          <img className="divider-1" src="/img/divider@2x.svg" />
        </div>
        <Button />
      </div>
      <div className="list-1">
        <WireRow text={wireRow1Props.text} value={wireRow1Props.value} />
        <WireRow text={wireRow2Props.text} value={wireRow2Props.value} className={wireRow2Props.className} />
        <WireRow text={wireRow3Props.text} value={wireRow3Props.value} className={wireRow3Props.className} />
      </div>
    </div>
  );
}

export default WiresCard;
