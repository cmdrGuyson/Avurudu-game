import React, { useState } from "react";
import { toast } from "react-toastify";

import "./game.css";

import pot from "../../assets/images/pot.svg";
import leaf from "../../assets/images/leaf.svg";
import Firebase from "../../service/firebase";

const Game = () => {
  const [loading, setLoading] = useState(false);

  const getPotRow = (count) => {
    const row = [];
    for (let i = 0; i < count; i++) {
      row.push(
        <img
          src={pot}
          alt={pot}
          className="pot"
          onClick={handlePotClick}
          key={i}
        />
      );
    }
    return <div className="pot-row">{row}</div>;
  };

  const getAllPots = (potCount, count) => {
    const pots = [];
    for (let i = 0; i < count; i++) {
      pots.push({ ...getPotRow(potCount), key: `potrow ${i}` });
    }
    return (
      <div className="all-pots">
        <img src={leaf} className="nuts-alt" alt="nuts-alt" />
        {pots}
      </div>
    );
  };

  const handlePotClick = async () => {
    setLoading(true);
    try {
      if (!loading) {
        //await Firebase.playGame();
      }
    } catch (error) {
      toast.error(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return <div className="game">{getAllPots(4, 3)}</div>;
};

export default Game;
