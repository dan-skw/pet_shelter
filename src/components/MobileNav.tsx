import React from "react";
import { FaHome } from "react-icons/fa";

const MobileNav = () => {
  return (
    <>
      <div className="fixed flex h-32 w-full bottom-0 p-4 justify-center items-center ">
        <ul className="grid grid-cols-4 grid-rows-1 gap-4  h-2/3 w-full rounded-full backdrop-blur-md shadow-sm m-8">
          <li className="flex items-center justify-center text-white bg-white rounded-full m-2">
            <FaHome className="h-6 w-6 fill-slate-500" />
          </li>
          <li className="flex items-center justify-center text-white bg-white rounded-full m-2">
            <FaHome className="h-6 w-6 fill-slate-500" />
          </li>
          <li className="flex items-center justify-center text-white bg-white rounded-full m-2">
            <FaHome className="h-6 w-6 fill-slate-500" />
          </li>
          <li className="flex items-center justify-center text-white bg-white rounded-full m-2">
            <FaHome className="h-6 w-6 fill-slate-500" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
