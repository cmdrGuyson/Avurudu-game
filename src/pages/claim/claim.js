import React, { useEffect } from "react";
import ReactGA from "react-ga4";

import lines from "../../assets/images/lines.svg";
import lines2 from "../../assets/images/lines2.svg";
import Socials from "../../components/socials/socials";
import Voucher from "../../components/voucher/voucher";

import "./claim.css";

const Claim = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/claim" });
  }, []);

  return (
    <div className="claim-container">
      <img src={lines2} className="lines-left" alt="lines-left"></img>
      <img src={lines} className="lines-right" alt="lines-right"></img>
      <div className="claim">
        <Voucher />
        <p className="redeem-txt">
          දැන්ම{" "}
          <a href="http://www.innovink.lk" target="_blank" rel="noreferrer">
            www.innovink.lk
          </a>{" "}
          එකට පිවිස, ඔබගේ gift එක redeem කරගන්න.
        </p>
        <Socials />
      </div>
    </div>
  );
};

export default Claim;
