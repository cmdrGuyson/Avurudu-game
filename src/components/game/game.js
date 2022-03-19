import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./game.css";

import pot from "../../assets/images/pot.svg";
import leaf from "../../assets/images/leaf.svg";
import Firebase from "../../service/firebase";
import { useWinState } from "../../context/data.context";
import Socials from "../socials/socials";

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
          className={!props.mobile ? "pot" : "pot-mobile"}
          onClick={handlePotClick}
          key={i}
        />
      );
    }
    return (
      <div className={!props.mobile ? "pot-row" : "pot-row-mobile"}>{row}</div>
    );
  };

  const getAllPots = (potCount, count) => {
    const pots = [];
    for (let i = 0; i < count; i++) {
      pots.push({ ...getPotRow(potCount), key: `potrow ${i}` });
    }
    return (
      <div className={!props.mobile ? "all-pots" : "all-pots-mobile"}>
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

  return (
    <div className={!props.mobile ? "game" : "game-mobile"}>
      {getAllPots(props.mobile ? 3 : 4, props.mobile ? 4 : 3)}
      {props.mobile && <Socials />}
    </div>
  );
};

export default Game;
