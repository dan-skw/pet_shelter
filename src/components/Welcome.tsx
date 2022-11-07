import React from "react";
import { Header } from "./Header";
import { StaticImage } from "gatsby-plugin-image";

export const Welcome = () => {
  return (
    <>
      <section className="first-doggo w-full h-screen flex flex-col sm:justify-start items-center py-20">
        <Header />
        <div className="flex flex-col h-full w-3/4">
          <div className="w-full md:w-2/3 h-full md:h-3/4 flex flex-col justify-end pb-16">
            <div className="w-3/4">
              <h1 className="font-merri text-white text-2xl md:text-4xl">
                Everyone needs a
                <span className="text-bold text-slate-300"> warm</span> place.
              </h1>
              <br></br>
              <p className="text-white md:w-3/4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sem metus, commodo vel dui nec, ornare interdum velit.
                Vestibulum nec velit congue.
              </p>
            </div>
          </div>
          <div className="flex w-1/3 justify-center">
            <button className="absolute bg-white rounded-full md:w-64 md:h-16 md:text-2xl hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
              Make a friend
            </button>
            <div className="bg-slate-500 rounded-full md:w-64 md:h-16"></div>
          </div>
        </div>
      </section>
    </>
  );
};
