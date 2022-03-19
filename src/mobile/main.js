import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Game from "../components/game/game";

import leaves from "../assets/images/leaves.svg";
import logo from "../assets/images/logo.svg";

import "./mobile.css";
import Socials from "../components/socials/socials";

const MainMobile = (props) => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/" });
  }, []);

  return (
    <div className="main_mobile">
      <img src={leaves} className="leaves-left-mobile" alt="leaves-left" />
      <img src={logo} alt="logo" className="logo-mobile" />
      <Game onClaim={props.onClaim} mobile />
    </div>
  );
};

export default MainMobile;
