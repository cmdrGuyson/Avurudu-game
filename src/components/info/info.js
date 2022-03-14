import React from "react";
import logo from "../../assets/images/logo.svg";

import "./info.css";
import Socials from "../socials/socials";

const Info = () => {
  return (
    <div className="info">
      <img src={logo} alt="logo" className="logo" />
      <p className="how-to-title">කොහොමද play කරන්නේ?</p>
      <p className="how-to">
        කණා මුට්ටිය බිඳීමට, හිතලා බලලා, ඔබ කැමති කණා මුට්ටියකට click/tap කරන්න.
      </p>
      <p className="what-is-title">
        මොකක්ද Innovink අවුරුදු තෑගි මුට්ටිය කියන්නේ?
      </p>
      <ul className="what-is-ul">
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
      <Socials />
    </div>
  );
};

export default Info;
