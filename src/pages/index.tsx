import * as React from "react";
import "../styles/styles.css";

import { Welcome } from "../components/Welcome";
import { About } from "../components/About";
import { PetsShowcase } from "../components/PetsShowcase/PetsShowcase";
import { HelpSection } from "../components/FormsOfHelp/HelpSection";
import { Donation } from "../components/Donation";
import { Footer } from "../components/footer/Footer";

const IndexPage = () => {
  return (
    <>
      <Welcome />
      <About />
      <PetsShowcase />
      <HelpSection />
      <Donation />
      <Footer />
      <div className="fixed text-white text-2xl">ssdfsdfsdf</div>
    </>
  );
};

export default IndexPage;
