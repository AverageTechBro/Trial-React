import React from "react";
import "./Possibility.css";
import vrimage from "../../assets/possibility.png";
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={vrimage} alt="" />
      </div>
      <div className="gpt3__possibility-description">
        <p className="gpt3__possibility-description-pI">
          Request Early Acess to Get Started
        </p>
        <h1 className="gradient__text">
          The possibilites are beyond your imagination
        </h1>
        <p className="gpt3__possibility-description-pII">
          Come to the breaking bad and better call saul universe for a wonderful
          experience and view everything that we have to offer from our wide
          selection of tacos to fried chicken. The boss will sog youCome to the
          breaking bad and better call saul universe for a wonderful experience
          and view everything that we have to offer from our wide selection of
          tacos to fried chicken.
        </p>
        <p className="gpt3__possibility-description-pIII">
          Request early access to get started{" "}
        </p>
      </div>
    </div>
  );
};

export default Possibility;
