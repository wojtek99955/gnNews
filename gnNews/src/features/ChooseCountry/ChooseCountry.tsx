import { countries } from "../../components/Sidebar/countries";
import { useDispatch } from "react-redux";
import { setCurrentCountry } from "../currentCountrySlice";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { CountriesContainer } from "./ChooseCountryStyle";

interface Country {
  country: string;
  flag_img: string;
  country_shortcut: string;
}

const ChooseCountry = () => {
  const dispatch = useDispatch();
  const handleSelectCountry = (name: string) => {
    dispatch(setCurrentCountry(name));
  };

  const params = useParams();
  const countryNameParam = params.countryName;

  useEffect(() => {
    if (countryNameParam) dispatch(setCurrentCountry(countryNameParam));
  }, [countryNameParam]);
  return (
    <CountriesContainer>
      <ul>
        {countries.map(({ country, flag_img, country_shortcut }: Country) => {
          return (
            <li
              onClick={() => {
                handleSelectCountry(country_shortcut);
              }}
            >
              <NavLink to={`/country/${country_shortcut}`}>
                <span> {country_shortcut} </span>
                <img src={flag_img} alt="" />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </CountriesContainer>
  );
};

export default ChooseCountry;
