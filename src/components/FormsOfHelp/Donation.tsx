import React from "react";
import CreditCard from "../../assets/credit-card.inline.svg";
import { StaticImage } from "gatsby-plugin-image";

export const Donation = () => {
  return (
    <section className="bg-white h-full w-full flex flex-col md:flex-row md:justify-center border-solid divide-y-2 border-black">
      <div className="flex flex-col items-center text-center md:text-left md:flex-row md:justify-center w-full md:w-2/3">
        {/* <StaticImage
          src={"../../images/doggiup.jpg"}
          alt="dog looking up"
          className="invisible md:visible w-1/2 h-1/2 object-cover"
        /> */}
        <div className="flex flex-col items-center md:items-start px-6 md:px-0 md:w-1/4 m-4">
          <h1 className="font-playfair text-3xl">
            In addition, you can make a donation
          </h1>
          <p className="font-merri text-sm my-4">
            Name of the bank / Type of bank account
          </p>
          <div className="flex py-2 px-4 bg-slate-200 w-fit rounded-xl">
            <CreditCard className="h-8 w-8 mr-2" />
            <p className="text-xl">8380 2880 8028 8791 7435</p>
          </div>
          <p className="text-justify text-sm py-4 text-gray-400">
            Pellentesque dictum nisl a enim tempus imperdiet vitae ut libero.
            Suspendisse aliquam dapibus aliquet. Donec at mi feugiat, eleifend
            dui. Suspendisse aliquam dapibus aliquet. Donec at mi feugiat,
            eleifend dui
          </p>
        </div>
      </div>
    </section>
  );
};
