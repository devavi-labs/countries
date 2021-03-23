import { CountryCode } from "../models/country/countryCode";
import { axiosClient } from "./axios.client";

export const getAllCountryCodes = async function (): Promise<
  Array<CountryCode>
> {
  const { data } = await axiosClient.get<Array<CountryCode>>(
    "/all?fields=alpha2Code"
  );

  return data;
};
