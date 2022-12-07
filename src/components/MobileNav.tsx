import React from "react";
import { FaHome, FaDog, FaHandsHelping, FaPhone } from "react-icons/fa";

const MobileNav = () => {
  return (
    <>
      <div className="bottom-0 fixed flex h-32 w-full p-4 justify-center items-center">
        <ul className="grid grid-cols-4 grid-rows-1 gap-4 h-2/3 w-full md:w-1/2 lg:w-1/4 rounded-full bg-white m-8 shadow-lg">
          <li className="mobile-nav-btn">
            <FaHome className="h-6 w-6" />
          </li>
          <li className="mobile-nav-btn">
            <FaDog className="h-6 w-6" />
          </li>
          <li className="mobile-nav-btn">
            <FaHandsHelping className="h-6 w-6" />
          </li>
          <li className="mobile-nav-btn">
            <FaPhone className="h-6 w-6" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
