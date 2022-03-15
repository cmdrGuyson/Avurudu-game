import React from "react";

import "./game.css";

import pot from "../../assets/images/pot.svg";
import nuts from "../../assets/images/nuts-alt.svg";

const getPotRow = (count) => {
  const row = [];
  for (let i = 0; i < count; i++) {
    row.push(<img src={pot} alt={pot} className="pot" />);
  }
  return <div className="pot-row">{row}</div>;
};

const getAllPots = (potCount, count) => {
  const pots = [];
  for (let i = 0; i < count; i++) {
    pots.push(getPotRow(potCount));
  }
  return (
    <div className="all-pots">
      <img src={nuts} className="nuts-alt" alt="nuts-alt"></img>
      {pots}
    </div>
  );
};

const Game = () => {
  return <div className="game">{getAllPots(4, 3)}</div>;
};

export default Game;
