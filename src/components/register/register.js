import React from "react";
import win from "../../assets/images/win.svg";
import lose from "../../assets/images/lose.svg";
import dude from "../../assets/images/dude.svg";

import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <img src={win} alt="logo" className="logo" />
      <p className="claim-text">
        ඔබගේ gift එක reveal කරන්න, පහත විස්තර පුරවන්න.
      </p>
      <div className="input-fields">
        <input placeholder="Name" />
        <input placeholder="Mobile" />
        <input placeholder="Email" />
        <button className="reveal-btn">REVEAL MY GIFT</button>
        <p className="or">or</p>
        <button className="fb-button">Login with Facebook</button>
        <img src={dude} alt="dude" className="dude-img" />
      </div>
    </div>
  );
};

export default Register;
