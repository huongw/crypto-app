import React from "react";
import image from "../../../images/crypto.png";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <div>
        <h2 className="about-title">
          Secure your future with{" "}
          <span className="logo-color">crypto</span>currency
        </h2>
        <p>
          Cryptocurrency is a type of currency that uses advanced encryption
          techniques to regulate the generation of units of currency and verify
          the transfer of funds. It is based on decentralized technology called
          blockchain, which provides a transparent and tamper-proof ledger for
          recording transactions.
        </p>
        <p>
          Cryptocurrencies have gained popularity in recent years due to their
          potential for anonymity, security, and low transaction fees, making
          them a popular option for online transactions. While still a
          relatively new technology, cryptocurrencies have already had a
          significant impact on the financial industry and may continue to do so
          in the future.
        </p>
      </div>
      <div className="about-img">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default About;
