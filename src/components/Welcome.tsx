import React from "react";

export const Welcome = () => {
  return (
    <>
      <section className="h-96 flex flex-col sm:flex-row sm:justify-center items-center pb-8 mt-16">
        <div className="w-full md:w-1/3 h-full flex flex-col justify-around items-center">
          <div className="w-3/4">
            <h1 className="font-merri text-white text-2xl md:text-3xl">
              Everyone needs a
              <span className="text-bold text-orange-200"> warm</span> place.
            </h1>
            <br></br>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sem metus, commodo vel dui nec, ornare interdum velit. Vestibulum
              nec velit congue.
            </p>
          </div>
          <button className="bg-white rounded-full w-48 h-12 text-xl hover:cursor-pointer">
            Make a friend
          </button>
        </div>
        <div className="w-1/3 text-white">pies</div>
      </section>
    </>
  );
};
