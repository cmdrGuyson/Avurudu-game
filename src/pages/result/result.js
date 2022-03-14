import React from "react";
import Info from "../../components/info/info";

import nuts from "../../assets/images/nuts.svg";
import lines from "../../assets/images/lines.svg";

import Register from "../../components/register/register";

import "./result.css";

const Result = () => {
  return (
    <div className="result">
      <img src={nuts} className="nuts-left" alt="nuts-left"></img>
      <img src={lines} className="lines-right" alt="lines-right"></img>
      <Register />
      <Info />
    </div>
  );
};

export default Result;
