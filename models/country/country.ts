import { CountryCode } from "./countryCode";

export class Country extends CountryCode {
  name: string;
  capital?: string;
  population?: number;
  flag: string;
}
