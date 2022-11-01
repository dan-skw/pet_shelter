import React from "react";

export const Header = () => {
  return (
    <>
      <header className="flex flex-col md:flex-row w-full justify-between text-center my-8">
        <div className="mt-6 font-playfair md:w-1/2">
          <h1 className="text-5xl text-orange-200">LOVELY PAWS</h1>
          <p className="text-xl mt-2 text-white">
            better place for human best friends
          </p>
        </div>
        <nav className="md:w-1/2 flex flex-col justify-center mt-8">
          <ul className="flex justify-center md:text-lg text-white">
            <li className="menuItem mx-4">
              <p>About</p>
            </li>
            <li className="menuItem mx-4">
              <p>Our pets</p>
            </li>
            <li className="menuItem mx-4">
              <p>Help us</p>
            </li>
            <li className="menuItem mx-4">
              <p>Contacts</p>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
