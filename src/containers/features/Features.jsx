import React from "react";
import Feature from "../../components/feature/Feature";
import "./Features.css";
const featuresData = [
  {
    title: "Los Pollos Hermanos",
    text: "Welcome to the Los Pollos Hermanos where something delicius is always cooking.Welcome to the Los Pollos Hermanos where something delicius is always cooking.Welcome to the Los Pollos Hermanos where something delicius is always cooking. ",
  },
  {
    title: "Lalo's Delicius Tacos",
    text: "Lalo's Delicius is a fine establishment where we welcome guests with the upmost fine TacosLalo's Delicius is a fine establishment where we welcome guests with the upmost fine Tacos",
  },
  {
    title: "Walt's Fun Crystals",
    text: "Welcome to Walt's Fun Crystals where nothing is methemphetamine relatedWelcome to Walt's Fun Crystals where nothing is methemphetamine relatedWelcome to Walt's Fun Crystals where nothing is methemphetamine related",
  },
];
const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-containerr">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
