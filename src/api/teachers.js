import axios from "axios";

import { BASE_URL } from "./constants";

export const getTeachers = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/teachers${query ? `?q=${query}` : ''}`);

  return data;
};

export const getTeacher = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/teachers/${id}`);

  return data;
};


export const addTeacher = async (t) => {
  const { data } = await axios.post(`${BASE_URL}/teachers`, t);

  return data;
};

export const deleteTeacher = async (id) =>
  axios.delete(`${BASE_URL}/teachers/${id}`);
