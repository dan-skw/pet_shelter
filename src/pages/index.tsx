import * as React from "react";
import "../styles/styles.css";

import { Header } from "../components/Header";
import { Welcome } from "../components/Welcome";
import { About } from "../components/About";
import { PetsShowcase } from "../components/PetsShowcase/PetsShowcase";
import { HelpSection } from "../components/FormsOfHelp/HelpSection";
import { Donation } from "../components/Donation";
import { Footer } from "../components/footer/Footer";

const IndexPage = () => {
  return (
    <>
      <Header />
      <Welcome />
      <About />
      <PetsShowcase />
      <HelpSection />
      <Donation />
      <Footer />
    </>
  );
};

export default IndexPage;
