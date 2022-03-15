import React from "react";
import logo from "../../assets/images/logo.svg";
import flower from "../../assets/images/flower.svg";
import congrats from "../../assets/images/congrats.svg";
import manleft from "../../assets/images/man-left.svg";
import manright from "../../assets/images/man-right.svg";

import "./voucher.css";

const Voucher = () => {
  return (
    <div className="voucher-container">
      <img src={flower} alt="flower" className="flower1" />
      <img src={flower} alt="flower" className="flower2" />
      <img src={flower} alt="flower" className="flower3" />
      <img src={manleft} alt="man" className="man-left" />
      <img src={manright} alt="man" className="man-right" />
      <div className="voucher">
        <img src={logo} alt="logo" className="logo" />
        <div className="right-container">
          <img src={congrats} className="congrats" alt="congrats" />
          <p className="title-voucher">
            මෙන්න ඔබ ජයග්‍රහණය කරපු (gift name) එක redeem කරගන්න code එක.
          </p>
          <div className="code">
            <p>000000000000</p>
          </div>
          <div className="buttons-container">
            <button className="print-btn">Print or Copy</button>
            <button href="#" className="shop-btn">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <p className="terms-txt">
        මෙම තෑග්ග වලංගු වන්නේ 2022 අප්‍රේල් 30 දක්වා පමණි* <br />
        එක code එකක් වලංගු වන්නේ එක භාණ්ඩයක් සහ මිලදීගැනීමක් සඳහා පමණි.
      </p>
    </div>
  );
};

export default Voucher;
