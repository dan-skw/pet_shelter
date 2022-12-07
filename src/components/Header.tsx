import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { useIsVisible } from "../hooks/useIsVisible";

import MobileNav from "./MobileNav";

export const Header = () => {
  const navRef = useRef<HTMLElement>(null);
  const isInViewport = useIsVisible(navRef);

  return (
    <>
      <header
        ref={navRef}
        className="flex flex-col md:flex-row w-full justify-between text-center my-8"
      >
        <div className="mt-6 font-playfair md:w-1/2">
          <h1 className="text-5xl md:text-7xl text-slate-400">LOVELY PAWS</h1>
          <p className="text-xl md:text-2xl mt-2 text-white">
            better place for human best friends
          </p>
        </div>
        <nav className="md:w-1/2 flex flex-col justify-center mt-8">
          <ul className="flex justify-center md:text-2xl text-white">
            <li className="nav-btn">
              <p>About</p>
            </li>
            <li className="nav-btn">
              <p>Our pets</p>
            </li>
            <li className="nav-btn">
              <p>Help us</p>
            </li>
            <li className="nav-btn">
              <p>Contacts</p>
            </li>
          </ul>
        </nav>
        {!isInViewport && createPortal(<MobileNav />, document.body)}
      </header>
    </>
  );
};
