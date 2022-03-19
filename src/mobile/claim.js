import React from "react";
import logo from "../assets/images/logo.png";
import flower from "../assets/images/flower.svg";
import congrats from "../assets/images/cons.png";
import manleft from "../assets/images/man-left.svg";
import manright from "../assets/images/man-right.svg";
import { useWinState } from "../context/data.context";
import html2canvas from "html2canvas";

import "./mobile.css";
import Socials from "../components/socials/socials";

const ClaimMobile = () => {
  const winState = useWinState();

  const onShop = () => {
    window.location.assign("https://www.innovink.lk");
  };

  const printRef = React.useRef();

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  if (!winState?.winState?.voucher) return null;

  return (
    <div className="voucher-mobile">
      <div className="voucher-container-mobile" ref={printRef}>
        <img src={flower} alt="flower" className="flower1-mobile" />
        <img src={flower} alt="flower" className="flower3-mobile" />

        <img src={logo} alt="logo" className="logo-voucher" />

        <img src={congrats} className="congrats-mobile" alt="congrats-mobile" />
        <p className="title-voucher">
          මෙන්න ඔබ ජයග්‍රහණය කරපු {winState?.winState?.voucher.title} එක redeem
          කරගන්න code එක.
        </p>
        <div className="code-mobile">
          <p>{winState?.winState?.voucher.code}</p>
        </div>
        <div className="buttons-container">
          <button className="print-btn" onClick={handleDownloadImage}>
            Download Voucher
          </button>
          <button className="shop-btn" onClick={onShop}>
            SHOP NOW
          </button>
        </div>
        <p className="link-txt-mobile">
          දැන්ම www.innovink.lk එකට පිවිස, ඔබගේ gift එක redeem කරගන්න.
        </p>
      </div>
      <p className="terms-txt-mobile">
        මෙම තෑග්ග වලංගු වන්නේ 2022 අප්‍රේල් 30 දක්වා පමණි* <br />
        එක code එකක් වලංගු වන්නේ එක භාණ්ඩයක් සහ මිලදීගැනීමක් සඳහා පමණි.
      </p>
      <Socials />
    </div>
  );
};

export default ClaimMobile;
