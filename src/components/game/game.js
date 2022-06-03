import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./game.css";

import pot from "../../assets/images/pot.svg";
import leaf from "../../assets/images/leaf.svg";
import Firebase from "../../service/firebase";
import { useWinState } from "../../context/data.context";
import Socials from "../socials/socials";

import arrow from "../../assets/images/arrow-btn.svg";

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

  const onClickArrow = () => {
    navigate("/info-mobile");
  };

  const handlePotClick = async () => {
    props.onClaim?.();
    setLoading(true);
    try {
      if (!loading) {
        const played = localStorage.getItem("8293742034");
        if (played) {
          navigate("/fail");
          return;
        }
        localStorage.setItem("8293742034", true);
        const type = await Firebase.getWinningVoucher();
        setLoading(false);
        navigate("/result");
        winState.setWin({ ...winState, winState: type });
      }
      setLoading(false);
    } catch (error) {
      toast.error(error);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className={!props.mobile ? "game" : "game-mobile"}>
      {props.mobile && (
        <img
          alt="info-btn"
          src={arrow}
          className="info-btn"
          onClick={onClickArrow}
        />
      )}
      {getAllPots(props.mobile ? 3 : 4, props.mobile ? 4 : 3)}
      {props.mobile && <Socials />}
    </div>
  );
};

export default Game;
