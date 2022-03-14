import React from "react";
import fb from "../../assets/images/fb.svg";
import tweet from "../../assets/images/tweet.svg";
import wa from "../../assets/images/wa.svg";
import share from "../../assets/images/share.svg";

import "./socials.css";

const Socials = () => {
  return (
    <div className="share-buttons">
      <img src={fb} alt="fb" className="share-btn" />
      <img src={wa} alt="wa" className="share-btn" />
      <img src={tweet} alt="tweet" className="share-btn" />
      <img src={share} alt="share" className="share-btn" />
    </div>
  );
};

export default Socials;
