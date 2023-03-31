import { countries } from "../components/Sidebar/countries";

export const getFlag = (currentCountry: string) => {
  const findCountryFlag: any = countries.filter((country: any) => {
    return country.country_shortcut === currentCountry;
  });

  return findCountryFlag[0];
};
