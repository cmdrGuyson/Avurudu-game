import React from "react";
import logo from "../../assets/images/logo.png";
import flower from "../../assets/images/flower.svg";
import congrats from "../../assets/images/cons.png";
import manleft from "../../assets/images/man-left.svg";
import manright from "../../assets/images/man-right.svg";
import { useWinState } from "../../context/data.context";
import html2canvas from "html2canvas";

import "./voucher.css";

const Voucher = () => {
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
    <div className="voucher-container" ref={printRef}>
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
            මෙන්න ඔබ ජයග්‍රහණය කරපු {winState?.winState?.voucher.title} එක
            redeem කරගන්න code එක.
          </p>
          <div className="code">
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
