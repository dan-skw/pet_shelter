import React, { useRef } from "react";
import "../styles/styles.css";

import { Welcome } from "../components/Welcome";
import { About } from "../components/About";
import { PetsShowcase } from "../components/PetsShowcase/PetsShowcase";
import { HelpSection } from "../components/FormsOfHelp/HelpSection";
import { Footer } from "../components/footer/Footer";

const IndexPage = () => {
  return (
    <>
      <Welcome />
      <About />
      <PetsShowcase />
      <HelpSection />
      <Footer />
    </>
  );
};

export default IndexPage;
