import React from "react";

import { MainSection } from "./Home.styles";
import Header from "../header/Header";
import Hero from "../hero/Hero";

const Home = () => {
  return (
    <MainSection>
      <Header />
      <Hero />
    </MainSection>
  );
};

export default Home;
