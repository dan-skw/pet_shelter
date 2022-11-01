import * as React from "react";
import "../styles/styles.css";

import { Header } from "../components/Header";
import { Welcome } from "../components/Welcome";
import { About } from "../components/About";
import { PetsShowcase } from "../components/PetsShowcase/PetsShowcase";
import { HelpSection } from "../components/FormsOfHelp/HelpSection";

const IndexPage = () => {
  return (
    <>
      <Header />
      <Welcome />
      <About />
      <PetsShowcase />
      <HelpSection />
    </>
  );
};

export default IndexPage;
