import React from "react";

type ButtonsProps = {
  buttons: {
    id: number;
    iconName: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    alt: string;
  }[];
};

export const HelpMenuMobile = ({ buttons }: ButtonsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-0 md:gap-x-4">
      {buttons.map(({ id, Icon, alt }) => (
        <div
          key={id}
          className="flex flex-col items-center mx-6 my-4 p-2
              rounded-xl transition-all hover:bg-gray-50 hover:shadow-md hover:transition-all hover:duration-200 hover:cursor-pointer"
        >
          <button>
            <Icon className="h-8 w-8 m-2 lg:h-14 lg:w-14 lg:m-4" />
          </button>
          <p className="text-black">{alt}</p>
        </div>
      ))}
    </div>
  );
};
