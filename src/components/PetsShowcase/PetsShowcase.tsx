import React from "react";
import { PetsGallery } from "./PetsGallery";

export const PetsShowcase = () => {
  const petsArray = [
    {
      id: 1,
      name: "spider",
      race: "Owczarekniemiecki",
    },
    {
      id: 2,
      name: "polo",
      race: "Owczarekniemiecki",
    },
    {
      id: 3,
      name: "rider",
      race: "Kundelek",
    },
    {
      id: 4,
      name: "ridersd",
      race: "Kundelek",
    },
    {
      id: 5,
      name: "ridersd",
      race: "Kundelek",
    },
    {
      id: 6,
      name: "ridersd",
      race: "Kundelek",
    },
    {
      id: 7,
      name: "ridersd",
      race: "Kundelek",
    },
    {
      id: 8,
      name: "ridersd",
      race: "Kundelek",
    },
  ];

  return (
    <section className="w-full h-full flex flex-col text-white justify-center items-center my-8">
      <h1 className="font-merri text-xl w-3/5 md:w-1/4 text-center mb-4 leading-7">
        Our <span className="text-orange-200">friends</span> who are looking for
        a house
      </h1>
      <div className="flex w-3/4 justify-center">
        <PetsGallery petsList={petsArray} />
      </div>
      <button className="bg-orange-200 text-black p-4 rounded-full mt-8 hover:cursor-pointer ">
        Get to know the rest
      </button>
    </section>
  );
};
