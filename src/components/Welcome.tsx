import React from "react";
import { Header } from "./Header";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export const Welcome = () => {
  return (
    <>
      <section className="first-doggo w-full h-screen flex flex-col sm:justify-start items-center md:py-20 pb-10">
        <Header />
        <div className="flex flex-col h-full md:w-3/4">
          <div className="w-full md:w-2/3 h-3/4 md:h-3/4 flex flex-col justify-center items-center text-justify md:justify-end md:pb-16">
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
          <div className="flex md:w-1/3 justify-center">
            <button className="bg-white w-1/2 h-14 rounded-full md:w-64 md:h-16 md:text-2xl hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
              Make a friend
            </button>
          </div>
        </div>
        <div className="fixed flex flex-col md:flex-row text-white text-2xl right-0 bottom-0 p-4 space-y-2 md:space-x-2 md:space-y-0">
          <a href="https://www.linkedin.com/in/daniel-skwarczek-23451b237/">
            <FaLinkedin className="transition duration-400 hover:fill-blue-400" />
          </a>
          <a href="https://github.com/dan-skw/pet_shelter">
            <FaGithubSquare className="transition duration-400 hover:fill-pink-800" />
          </a>
        </div>
      </section>
    </>
  );
};
