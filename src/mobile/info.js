import React, { useEffect } from "react";
import ReactGA from "react-ga4";

import logo from "../assets/images/logo.svg";
import lines from "../assets/images/lines.svg";
import arrow from "../assets/images/arrow-btn.svg";

import "./mobile.css";
import { useNavigate } from "react-router-dom";

const InfoMobile = (props) => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/info-mobile" });
  }, []);

  const navigate = useNavigate();

  const onClickArrow = () => {
    navigate("/");
  };

  return (
    <div className="info-mobile">
      <img
        alt="info-btn"
        src={arrow}
        className="info-btn"
        onClick={onClickArrow}
      />
      <img src={lines} className="lines-right" alt="lines-right" />
      <img src={logo} alt="logo" className="logo-mobile" />
      <p className="how-to-title">කොහොමද play කරන්නේ?</p>
      <p className="how-to">
        කණා මුට්ටිය බිඳීමට, හිතලා බලලා, ඔබ කැමති කණා මුට්ටියකට click/tap කරන්න.
      </p>
      <p className="what-is-title">
        මොකක්ද Innovink අවුරුදු තෑගි මුට්ටිය කියන්නේ?
      </p>
      <ul className="what-is-ul-mobile">
        <li>
          ඔබගේ අවුරුදු තෑගි ගොන්නට headphones, speakers, power banks, printers
          සහ එක එක මාදිලියේ tech accessories එකතු කරගන්න කැමතිද? කැමති නම්, ඒකට
          හොදම chance එකක් අවුරුදු තෑගි පිරුණු Innovink අවුරුදු තෑගි මුට්ටිය
          තුළින් ලබා ගන්න පුළුවන්.
        </li>
        <li>
          ඔබ බිඳින කණා මුට්ටියේ, අපේ special gifts තිබ්බොත්, ඔබත් පලවෙනි සැරේට
          සංවිධානය කරන Innovink අවුරුදු තෑගි මුට්ටිය game එකේ ජයග්‍රාහකයෙක්!{" "}
        </li>
        <li>
          බිඳින කණා මුට්ටියේ, gifts තිබ්බේ නැති වුණොත් මොකද වෙන්නෙ කියලා හිතුවද?
          බය වෙන්න එපා, පැරදුණු අයටත් හිස් අතින් යන්න දෙන්නේ නැහැ අපි.{" "}
        </li>
      </ul>
    </div>
  );
};

export default InfoMobile;
