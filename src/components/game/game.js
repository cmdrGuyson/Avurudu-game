import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./game.css";

import pot from "../../assets/images/pot.svg";
import leaf from "../../assets/images/leaf.svg";
import Firebase from "../../service/firebase";
import { useWinState } from "../../context/data.context";

const Game = (props) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const winState = useWinState();

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
    props.onClaim?.();
    setLoading(true);
    try {
      if (!loading) {
        const type = await Firebase.getWinningVoucher();
        navigate("/result");
        winState.setWin({ ...winState, winState: type });
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
