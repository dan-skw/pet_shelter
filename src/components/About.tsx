import React from "react";

export const About = () => {
  return (
    <section className="w-full h-full flex flex-col md:flex-row text-white justify-center items-center">
      <div className="md:w-1/4">pieski</div>
      <div className="w-4/5 md:w-1/4">
        <h1 className="font-merri text-2xl md:text-3xl text-center md:text-left mb-4 md:mb-8">
          About the Shelter <br></br>
          <span className="font-playfair text-orange-200 text-3xl md:text-6xl">
            Lovely Paws
          </span>
        </h1>
        <p>
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
      </div>
    </section>
  );
};
