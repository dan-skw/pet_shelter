import React from "react";
import Buttons from "../../api/buttons";
import { Donation } from "./Donation";

export const HelpSection = () => {
  return (
    <>
      <section className="bg-white flex flex-col items-center w-full md:h-screen justify-center">
        <h1 className="font-playfair text-4xl text-center md:text-3xl my-4 w-3/4">
          Than you can help our shelter
        </h1>
        <div className="flex justify-center flex-wrap w-1/2">
          {Buttons &&
            Buttons.map(({ id, Icon, alt }) => (
              <div
                key={id}
                className="flex flex-col items-center mx-6 my-4 p-2
              rounded-xl transition-all hover:bg-gray-50 hover:shadow-md hover:transition-all hover:duration-200 hover:cursor-pointer"
              >
                <button>
                  <Icon className="h-14 w-14 m-4" />
                </button>
                <p className="text-black">{alt}</p>
              </div>
            ))}
        </div>
        <Donation />
      </section>
    </>
  );
};
