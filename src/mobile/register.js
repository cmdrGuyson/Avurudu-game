import React, { useEffect } from "react";
import ReactGA from "react-ga4";

import logo from "../assets/images/logo.svg";
import nuts from "../assets/images/nuts.svg";
import leaves from "../assets/images/leaf.svg";

import "./mobile.css";
import Register from "../components/register/register";

const RegisterMobile = (props) => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/info-mobile" });
  }, []);

  return (
    <div className="register-mobile-container">
      <img
        src={logo}
        alt="logo"
        className="logo-mobile"
        style={{ marginBottom: 120 }}
      />
      <img src={nuts} alt="nuts" className="nuts-mobile-register" />
      <img src={leaves} alt="leaves" className="leaves-mobile-register" />
      <Register mobile />
    </div>
  );
};

export default RegisterMobile;
