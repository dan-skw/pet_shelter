import React from "react";

import Envelope from "../../../assets/envelope.inline.svg";
import Telephone from "../../../assets/telephone.inline.svg";
import Pin from "../../../assets/pin.inline.svg";

export const FooterDesktop = () => {
  return (
    <section className="bg-stone-900 text-white flex justify-center box-border pt-16 pb-12">
      <div className="flex w-2/3 justify-between">
        <div className="flex flex-col w-1/3 p-4">
          <h2 className="font-merri text-3xl">For questions and suggestions</h2>
          <div className="flex">
            <Envelope className="w-10 h-10" />
            <p>email@shelter.com</p>
          </div>
          <div className="flex">
            <Telephone className="w-10 h-10" />
            <p>123 456 789</p>
          </div>
        </div>
        <div className="flex flex-col w-1/3 p-4">
          <h2 className="font-merri text-3xl">We are waiting for your visit</h2>
          <Pin className="w-10 h-10" />
        </div>
        <div className="flex flex-col w-1/3">
          <h2>piesek</h2>
        </div>
      </div>
    </section>
  );
};
