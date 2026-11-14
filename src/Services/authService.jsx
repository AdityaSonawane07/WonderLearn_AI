import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/auth",
  withCredentials: true
});

export const loginUser = async (data) => {
  const response = await API.post("/login", data);
  return response.data;
};

export const registerUser = async (data) => {
  const response = await API.post("/register", data);
  return response.data;
};

export const logoutUser = async () => {
  const response = await API.post("/logout");
  return response.data;
};