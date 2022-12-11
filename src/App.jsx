import React from "react";
import "./App.css";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import { Article, Brand, CTA, Feature, Navbar } from "./components";
import Swiperjs from "./tools/Swiperjs";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Swiperjs />
      <Footer />
    </div>
  );
};

export default App;
