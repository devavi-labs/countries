import { ExtendedCountry } from "../models/country/extendedCountry";
import { axiosClient } from "./axios.client";
import { getAllCountriesFields } from "./getAllCountries";

export const getCountry = async function (
  alpha2Code: string
): Promise<ExtendedCountry> {
  const { data } = await axiosClient.get<ExtendedCountry>(
    `/alpha/${alpha2Code}?fields=${getCountryFields.join(";")}`
  );

  return data;
};

const getCountryFields = getAllCountriesFields.concat([
  "region",
  "subregion",
  "altSpellings",
  "timezones",
  "nativeName",
  "currencies",
  "languages",
]);
