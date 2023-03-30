import React from "react";

import { MainSection } from "./Home.styles";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Input from "../input/Input";

const Home = () => {
  return (
    <MainSection>
      <Header />
      <Hero />
      <Input />
    </MainSection>
  );
};

export default Home;
