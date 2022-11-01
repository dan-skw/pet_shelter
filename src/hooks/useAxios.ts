import React, { useState, useEffect } from "react";
import { getPets } from "../api/axios";

export const useAxios = (petParam = 1) => {
  const [petsLoaded, setPetsLoaded] = useState<Array<object>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<object>({});
  const [isError, setIsError] = useState<boolean>(false);
  const [hasNextPet, setNextPet] = useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller;

    getPets(petParam, { signal })
      .then((data) => {
        setPetsLoaded((prev) => [...prev, ...data]);
        setNextPet(data.length > 0);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (signal.aborted) return; // if the request was aborted, don't set error state
        setIsError(true);
        setError({ message: err.message });
      });

    return () => controller.abort();
  }, [petParam]);

  return { petsLoaded, loading, error, isError, hasNextPet };
};
