import axios from "axios";

import { BASE_URL } from "./constants";

export const addUser = async (t) => {
  const { data } = await axios.post(`${BASE_URL}/user`, t);

  return data;
};

export const clearUser = async () => {
  const { data } = await axios.delete(`${BASE_URL}/user/1`);

  return data;
};
