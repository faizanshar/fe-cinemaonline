import axios from "axios";

export const API = axios.create({
  baseURL: "https://cinema-online-faiz.herokuapp.com/api/v1/",
});
