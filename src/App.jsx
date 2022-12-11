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
import Testimonial from "./Library/Testimonial";

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
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
