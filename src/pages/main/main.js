import React from "react";
import Game from "../../components/game/game";

import leaves from "../../assets/images/leaves.svg";

import Info from "../../components/info/info";

import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <img src={leaves} className="leaves-left" alt="leaves-left"></img>
      <Game />
      <Info />
    </div>
  );
};

export default Main;
