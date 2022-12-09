import React from "react";
import "./CTA.css";
const CTA = () => {
  return (
    <div className="gpt3__cta section__padding" id="cta">
      <div className="gpt3__cta-container">
        <p className="gpt3__cta-container-pI">
          Request early access to get started
        </p>
        <p className="gpt3__cta-container-pI-alt"> Request early access </p>
        <div className="gpt3__cta-container-midtext">
          <p className="gpt3__cta_container-midtext-pII">
            Register today and start exploring all the infinite possibilities.
          </p>
          <p className="gpt3__cta-container-midtext-pII-alt">Register today.</p>
          <button className="gpt3__cta-container-midtext-button">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
