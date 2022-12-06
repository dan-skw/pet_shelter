import React from "react";
import Buttons from "../../api/buttons";
import { Donation } from "./Donation";
import { HelpMenuMobile } from "./helpmenu/HelpMenuMobile";

export const HelpSection = () => {
  return (
    <>
      <section className="bg-white flex flex-col items-center w-full h-full justify-center">
        <h1 className="font-playfair text-4xl text-center md:text-3xl my-4 w-3/4">
          Than you can help our shelter
        </h1>
        <HelpMenuMobile buttons={Buttons} />
        <Donation />
      </section>
    </>
  );
};
