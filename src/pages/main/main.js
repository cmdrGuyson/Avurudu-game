import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Game from "../../components/game/game";

import leaves from "../../assets/images/leaves.svg";
import lines from "../../assets/images/lines.svg";

import Info from "../../components/info/info";

import "./main.css";

const Main = (props) => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/" });
  }, []);

  return (
    <div className="main">
      <img src={lines} className="lines-right" alt="lines-right" />
      <img src={leaves} className="leaves-left" alt="leaves-left"></img>
      <Game onClaim={props.onClaim} />
      <Info />
    </div>
  );
};

export default Main;
