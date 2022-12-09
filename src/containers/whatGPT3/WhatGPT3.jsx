import React from "react";
import Feature from "../../components/feature/Feature";
import "./WhatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <p className="header-whatgpt3">What is GPT3</p>
      <p className="text-whatgpt3-text">
        "GPT3 is a banking service in the surface but in actuallity it is a
        money laundering scheme that generates tons of white cash from black
        money which was earned by sex trafficking. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Voluptates porro, explicabo fugiat maiores
        repellendus illum commodi molestias. Alias sunt aspernatur facere fugit
        nostrum soluta nam nesciunt fuga, dolorum repellat! Cum et distinctio,
        iure maiores repudiandae magnam quaerat laudantium non sint, tempora ut
        reiciendis totam aliquid sapiente perferendis, explicabo praesentium
        quae? "
      </p>
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination.
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-feature-container">
      <Feature
        title="ChatBots"
        text="Our chat bots of Los Pollos Hermanos ensure the finest quality of communication experience for all users of different languages.Our chat bots of Los Pollos Hermanos ensure the finest quality of communication experience for all users of different languages."
      />
      <Feature
        title="Knowledge Base"
        text="Our knowledge is acquired from the oldest shrines of Mexico where the sacred recipie of Holy fried chicken lies.Our knowledge is acquired from the oldest shrines of Mexico where the sacred recipie of Holy fried chicken lies.Our knowledge is acquired."
      />
      <Feature
        title="Education"
        text="Our owner Mr.Gustavo Fring is the top scholar of the Academia of Los Spiecey Chicken who is able to produce the finest chicken you can buy.Our owner Mr.Gustavo Fring is the top scholar of the Academia of Los Spiecey Chicken who is able to produce the finest chicken you can buy."
      />
    </div>
  </div>
);

export default WhatGPT3;
