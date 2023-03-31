import styled from "styled-components";
import ChooseCountry from "../../features/ChooseCountry/ChooseCountry";

const Container = styled.aside`
  height: calc(100vh - 4rem);
  position: fixed;
  top: 4rem;
  z-index: 100;
  background-color: #e2ecfe;
`;

interface Country {
  country: string;
  flag_img: string;
}

const CountriesContainer = styled.div`
  margin: auto;
  margin-top: 1rem;
  max-width: 6rem;
`;

const Sidebar = () => {
  return (
    <Container>
      <CountriesContainer>
        <ChooseCountry />
      </CountriesContainer>
    </Container>
  );
};

export default Sidebar;
