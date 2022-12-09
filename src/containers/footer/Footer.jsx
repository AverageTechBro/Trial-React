import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding ">
      <div className="gpt3__footer-top">
        <h1 className="gradient__text">Do you want to step into the</h1>
        <h1 className="gradient__text">future before others?</h1>
        <button>Request Early Access</button>
      </div>
      <div className="gpt3__footer-bottom">
        <div className="gpt3__footer-bottom-left">
          <h1>GPT-3</h1>
          <p>
            Asgard, Milkyway Galaxy <br /> Norse, All Rights Reserved
          </p>
        </div>
        <div className="gpt3__footer-bottom-right">
          <div className="gpt3__footer-bottom-right-first">
            <h3>Links</h3>
            <ul>
              <li>Adress</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="gpt3__footer-bottom-right-second">
            <h3>Company</h3>
            <ul>
              <li>Terms and Condition</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="gpt3__footer-bottom-right-third">
            <h3>Get in Touch</h3>
            <ul>
              <li>Asgard, Norse</li>
              <li>9843214567</li>
              <li>norsemyth@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
