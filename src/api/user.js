import axios from "axios";

import { BASE_URL, API_URL } from "./constants";

export const addUser = async (t) => {
  const { data } = await axios.post(`${BASE_URL}/user`, t);

  return data;
};

export const clearUser = async () => {
  const { data } = await axios.delete(`${BASE_URL}/user/1`);

  return data;
};

export const registerUser = async (user) => {
  const { data } = await axios.post(`${API_URL}/users/signup`, user);

  return data;
};

export const logout = async (token) => {
  const { data } = await axios.post(
    `${API_URL}/users/logout`,
    {},
    { headers: { Authorization: "Bearer " + token } }
  );

  return data;
};
