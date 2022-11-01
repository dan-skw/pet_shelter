import * as React from "react";
import { useAxios } from "../hooks/useAxios";

type PetsProps = {
  petsList: {
    id: number;
    name: string;
    race: string; 
  }[];
};

export const SinglePet = (petsList: PetsProps) => {
  const [petsNum, setPetsNum] = React.useState<number>(0);
    const {
        loading, isError, error, petsLoaded, hasNextPage} = useAxios(petsNum);
    }

  const innerBoxRef = React.useRef<HTMLDivElement>(null);

  const handleLeftArrowIconClickEvent: React.EventHandler<
    React.MouseEvent<HTMLElement>
  > = React.useCallback(() => {
    if (innerBoxRef.current) {
      innerBoxRef.current.scrollBy({
        behavior: "smooth",
        left: -300,
      });
    }
  }, [innerBoxRef]);

  const handleRightArrowIconClickEvent: React.EventHandler<
    React.MouseEvent<HTMLElement>
  > = React.useCallback(() => {
    if (innerBoxRef.current) {
      innerBoxRef.current.scrollBy({
        behavior: "smooth",
        left: 300,
      });
    }
  }, [innerBoxRef]);

  const [arrowsVisible, setArrowsVisible] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (innerBoxRef.current) {
      if (innerBoxRef.current.scrollWidth > innerBoxRef.current.clientWidth) {
        setArrowsVisible(true);
      } else {
        setArrowsVisible(false);
      }
    }
  }, [
    innerBoxRef,
    ...(innerBoxRef.current
      ? [innerBoxRef.current.scrollWidth, innerBoxRef.current.clientWidth]
      : [null]),
    ...(innerBoxRef.current ? [innerBoxRef.current.clientWidth] : [null]),
    arrowsVisible,
    setArrowsVisible,
  ]);

  const [leftArrowVisible, setLeftArrowVisible] =
    React.useState<boolean>(false);
  const [rightArrowVisible, setRightArrowVisible] =
    React.useState<boolean>(true);

  const handleScrollChangeEvent: React.EventHandler<
    React.UIEvent<HTMLDivElement>
  > = (e) => {
    const currentPosition = e.currentTarget.scrollLeft;
    const maxScrollPosition =
      e.currentTarget.scrollWidth - e.currentTarget.clientWidth;
    if (currentPosition == 0) {
      setLeftArrowVisible(false);
    } else if (currentPosition == maxScrollPosition) {
      setRightArrowVisible(false);
    } else {
      setLeftArrowVisible(true);
      setRightArrowVisible(true);
    }
  };

  const renderPets = (): React.ReactNode => {
    return pets.petsList.map(({ id, name, race }) => {
      return (
        <article
          key={id}
          className=" flex flex-col justify-between items-center bg-white text-black rounded-3xl w-3/4 py-8 m-2"
        >
          <p>piesek</p>
          <p className="font-merri text-3xl mt-10">{name}</p>
          <p className="font-merri text-base mb-8">{race}</p>
          <button className="chosenPet rounded-full border-2 border-orange-200 px-6 py-2">
            Learn more
          </button>
        </article>
      );
    });
  };

  return (
    <>
      <div className="flex max-w-xl">
        <div
          className="flex flex-nowrap overflow-auto scroll-m-0"
          ref={innerBoxRef}
          onScroll={handleScrollChangeEvent}
        >
          {renderPets()}
        </div>
        {arrowsVisible && (
          <React.Fragment>
            {leftArrowVisible && (
              <div
                className="text-white"
                onClick={handleLeftArrowIconClickEvent}
              >
                x
              </div>
            )}
            {rightArrowVisible && (
              <div
                className="text-white"
                onClick={handleRightArrowIconClickEvent}
              >
                v
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    </>
  );
};
