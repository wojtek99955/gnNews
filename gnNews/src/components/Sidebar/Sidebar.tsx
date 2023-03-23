import styled from "styled-components";
import { countries } from "./countries";

const Container = styled.aside`
  min-width: 10rem;
  /* height: calc(100vh - 4rem); */
  position: fixed;
  top: 4rem;
`;

interface Country {
  country: string;
  flag_img: string;
}

const CountriesContainer = styled.div`
  margin: auto;
  margin-top: 1rem;

  max-width: 6rem;
  img {
    width: 1.3rem;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    display: flex;
    gap: 0.2rem;
    margin-bottom: 1rem;
    justify-content: space-between;
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <CountriesContainer>
        <ul>
          {countries.map(({ country, flag_img }: Country) => {
            return (
              <li>
                {country} <img src={flag_img} alt="" />
              </li>
            );
          })}
        </ul>
      </CountriesContainer>
    </Container>
  );
};

export default Sidebar;
