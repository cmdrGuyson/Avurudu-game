import React, { useEffect } from "react";
import ReactGA from "react-ga4";

import lines from "../assets/images/lines.svg";
import lines2 from "../assets/images/lines2.svg";
import nuts from "../assets/images/nuts-alt.svg";
import logo from "../assets/images/logo.svg";
import man1 from "../assets/images/man-flower.svg";
import man2 from "../assets/images/man-flower2.svg";
import fail from "../assets/images/fail.svg";

import "./mobile.css";
import Socials from "../components/socials/socials";

const FailMobile = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/fail" });
  }, []);

  const onShop = () => {
    window.location.assign("https://www.innovink.lk");
  };

  return (
    <div className="fail-mobile">
      <img src={lines2} className="lines-left" alt="lines-left" />
      <img src={lines} className="lines-right" alt="lines-right" />
      <img src={logo} alt="fail-logo" className="fail-logo" />
      {/* <img src={man1} alt="man" className="flower-man-left" />
      <img src={man2} alt="man" className="flower-man-right" /> */}
      <div className="fail-inner-mobile">
        <img src={fail} className="fail-icon" alt="fail" />
        <p className="fail-title-mobile">
          ඔබ දැනටමත් ලියාපදිංචි වී ඇත! <br />
          redeem code එක භාවිතා කර අවුරුදු තෑගි තෝරන්න.
        </p>
        <button className="reveal-btn fail-shop" onClick={onShop}>
          SHOP NOW
        </button>
        <p className="fail-title-mobile">
          තෑග්ග වලංගු වන්නේ 2022 අප්‍රේල් 30 දක්වා පමණි.
          <br />
          එක code එකක් වලංගු වන්නේ එක භාණ්ඩයක් සහ මිලදීගැනීමක් සඳහා පමණි.
        </p>
        <Socials />
      </div>
    </div>
  );
};

export default FailMobile;
