import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { useSizeCheck } from "../hooks/useSizeCheck";

export const About = () => {
  const screenSize = useSizeCheck();
  return (
    <section className="w-full h-screen flex flex-col md:flex-row text-white justify-center items-center">
      <StaticImage
        src={"../images/holdinghands2.jpg"}
        alt={"witam"}
        className="hidden sm:block sm:w-1/2"
      />
      <div className="ml-4 w-4/5 md:w-1/4">
        <h1 className="font-merri text-xl sm:text-3xl text-center md:text-left mb-4 md:mb-8">
          About the Shelter <br></br>
          <span className="font-playfair text-slate-400 text-3xl md:text-6xl">
            Lovely Paws
          </span>
        </h1>
        <p className="text-justify">
          Nullam ante lorem, feugiat ac lacinia vitae, sollicitudin vitae ante.
          Etiam lobortis justo sed odio rhoncus cursus. Nam at ipsum vel nulla
          sagittis venenatis. Cras sollicitudin bibendum libero, in facilisis
          diam rhoncus ac. Morbi tellus purus, pharetra nec convallis ac,
          finibus eu justo
        </p>
        <p className="mt-5">
          Pellentesque dictum nisl a enim tempus imperdiet vitae ut libero.
          Suspendisse aliquam dapibus aliquet. Donec at mi feugiat, eleifend dui
          et, faucibus leo.
        </p>
        <p className="">
          <span>"</span>Some text about helping.<span>"</span>
        </p>
      </div>
    </section>
  );
};
