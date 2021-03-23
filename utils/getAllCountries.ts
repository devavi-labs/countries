import { Country } from "../models/country/country";
import { axiosClient } from "./axios.client";

export const getAllCountries = async function (): Promise<Array<Country>> {
  const { data } = await axiosClient.get<Array<Country>>(
    `/all?fields=${getAllCountriesFields.join(";")}`
  );

  return data;
};

export const getAllCountriesFields = [
  "alpha2Code",
  "name",
  "capital",
  "population",
  "flag",
];
