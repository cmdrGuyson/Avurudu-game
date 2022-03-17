import React, { useState } from "react";
import { toast } from "react-toastify";
import win from "../../assets/images/win.svg";
import lose from "../../assets/images/lose.svg";
import dude from "../../assets/images/dude.svg";
import { useNavigate } from "react-router-dom";

import "./register.css";
import { useWinState } from "../../context/data.context";
import Firebase from "../../service/firebase";

const Register = () => {
  const winState = useWinState();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailSignup = async () => {
    if (mobile.length !== 10) {
      toast.error("Invalid phone number");
    } else {
      setLoading(true);
      try {
        const response = await Firebase.register(
          email.trim(),
          mobile.trim(),
          name.trim()
        );
        const voucher = await Firebase.claimWinningVoucher(
          winState.winState.winState
        );
        winState.setWin({ ...winState.winState, voucher });
        navigate("/claim");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error.code === "auth/email-already-in-use") {
          navigate("/fail");
        } else {
          toast.error("Something went wrong when signing up");
          console.log(error);
        }
      }
    }
  };

  if (!winState?.winState?.winState) return null;

  return (
    <div className="register">
      <img
        src={winState.winState.winState === "LOSE" ? lose : win}
        alt="logo"
        className={winState.winState.winState === "LOSE" ? "logo-lose" : "logo"}
      />
      <p className="claim-text">
        ඔබගේ gift එක reveal කරන්න, පහත විස්තර පුරවන්න.
      </p>
      <div className="input-fields">
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input
          placeholder="Mobile"
          type="number"
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="reveal-btn"
          disabled={loading || !email || !mobile || !name}
          onClick={handleEmailSignup}
        >
          REVEAL MY GIFT
        </button>
        <p className="or">or</p>
        <button className="fb-button">Login with Facebook</button>
        <img src={dude} alt="dude" className="dude-img" />
      </div>
    </div>
  );
};

export default Register;
