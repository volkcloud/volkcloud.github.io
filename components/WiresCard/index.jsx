import React, { useEffect, useState } from "react";
import Button from "../Button";
import WireRow from "../WireRow";
import "./WiresCard.css";

const wiresUrl = `${process.env.API_URL}wires`;

function WiresCard({ title }) {
  const [wires, setWires] = useState([]);

  useEffect(() => {
    fetch(wiresUrl, {headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}})
      .then(res => res.json())
      .then(
        (result) => {
          setWires(result.data.map((item) => ({
            name: item.attributes.Name,
            amount: item.attributes.Amount
          })));
        },
        (error) => {
          console.log(error);
        }
      )
  }, []);

  return (
    <div className="wires-card">
      <div className="overlap-group">
        <div className="title-frame">
          <div className="title-5 valign-text-middle poppins-normal-heavy-metal-20px">{title}</div>
          <img className="divider-1" src="/img/divider@2x.svg" />
        </div>
        <Button text="Approve all" iconName="CheckCircleFilled" style={{"float": "right"}} />
      </div>
      <div className="list-1">
        {wires.map((wire) => (<WireRow key={wire.name} text={wire.name} value={wire.amount} />))}
      </div>
    </div>
  );
}

export default WiresCard;
