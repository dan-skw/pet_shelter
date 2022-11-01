import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/pets",
});

export const getPets = async (petParam = 1, options = {}) => {
  const response = await api.get(`/${petParam}`, options);
  return response.data;
};
