import { Country } from "./country";

export class ExtendedCountry extends Country {
  region?: string;
  subregion?: string;
  altSpellings?: Array<string>;
  timezones?: Array<string>;
  nativeName?: string;
  currencies?: Array<Currency>;
  languages?: Array<Language>;
}

export class Currency {
  code: string;
  name: string;
  symbol: string;
}

export class Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}
