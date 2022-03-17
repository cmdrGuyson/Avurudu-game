import React, { useRef } from "react";
import fb from "../../assets/images/fb.svg";
import tweet from "../../assets/images/tweet.svg";
import wa from "../../assets/images/wa.svg";
import share from "../../assets/images/share.svg";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import "./socials.css";

const DESCRIPTION =
  "ඔබගේ අවුරුදු තෑගි ගොන්නට headphones, speakers, power banks, printers සහ එක එක මාදිලියේ tech accessories එකතු කරගන්න කැමතිද? කැමති නම්, ඒකට හොදම chance එකක් අවුරුදු තෑගි පිරුණු Innovink අවුරුදු තෑගි මුට්ටිය තුළින් ලබා ගන්න පුළුවන්.";
const LINK = "https://innovinkavurudu.web.app/";
const HASHTAG = "#InnovinkAvurudu";
const QUOTE = "Innovink අවුරුදු තෑගි මුට්ටිය";

const Socials = () => {
  const fbRef = useRef(null);
  const twitterRef = useRef(null);
  const waRef = useRef(null);
  const emailRef = useRef(null);

  const clickElement = (reference) => {
    reference.current?.click();
  };

  return (
    <div className="share-buttons">
      <FacebookShareButton
        url={LINK}
        body={`${QUOTE} \n${DESCRIPTION}`}
        hashtag={HASHTAG}
        description={DESCRIPTION}
        ref={fbRef}
      ></FacebookShareButton>
      <TwitterShareButton
        title={QUOTE}
        url={LINK}
        hashtags={["InnovinkAvurudu"]}
        ref={twitterRef}
      ></TwitterShareButton>
      <WhatsappShareButton
        title={`*${QUOTE}* \n${DESCRIPTION}`}
        separator={"\n"}
        url={LINK}
        ref={waRef}
      ></WhatsappShareButton>
      <EmailShareButton
        url={LINK}
        separator={"\n"}
        subject={QUOTE}
        body={`${QUOTE} \n${DESCRIPTION}`}
        ref={emailRef}
      ></EmailShareButton>
      <img
        src={fb}
        alt="fb"
        className="share-btn"
        onClick={() => clickElement(fbRef)}
      />
      <img
        src={wa}
        alt="wa"
        className="share-btn"
        onClick={() => clickElement(waRef)}
      />
      <img
        src={tweet}
        alt="tweet"
        className="share-btn"
        onClick={() => clickElement(twitterRef)}
      />
      <img
        src={share}
        alt="share"
        className="share-btn"
        onClick={() => clickElement(emailRef)}
      />
    </div>
  );
};

export default Socials;
