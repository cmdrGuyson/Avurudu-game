import React, { useEffect } from "react";
import ReactGA from "react-ga4";

import lines from "../../assets/images/lines.svg";
import lines2 from "../../assets/images/lines2.svg";
import fail from "../../assets/images/fail.svg";

import "./unavailable.css";

const Unavailable = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/unavailable" });
  }, []);

  return (
    <div className="unavailable">
      <img src={lines2} className="lines-left" alt="lines-left" />
      <img src={lines} className="lines-right" alt="lines-right" />
      <div className="unavailable-inner">
        <img src={fail} className="unavailable-icon" alt="unavailable" />
        <p className="unavailable-title">
          Mobile support unavailable temporarily.
        </p>
      </div>
    </div>
  );
};

export default Unavailable;
