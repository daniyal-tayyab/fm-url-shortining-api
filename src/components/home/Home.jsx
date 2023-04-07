import React from "react";

import { MainSection } from "./Home.styles";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Input from "../input/Input";
import AdvanceStats from "../advance-stats/AdvanceStats";

const Home = () => {
  return (
    <>
      <MainSection>
        <Header />
        <Hero />
        <Input />
        <AdvanceStats />
      </MainSection>
    </>
  );
};

export default Home;
