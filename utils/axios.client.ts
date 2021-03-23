import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://restcountries.eu/rest/v2",
});
