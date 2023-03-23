import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  background-color: white;
  gap: 3rem;
  min-height: 4rem;
  padding: 0 1rem;
  z-index: 2;
  width: 100%; ;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  span {
    background-color: #3b7fe9;
    padding: 0.5rem;
    border-radius: 8px;
    color: white;
    font-size: 1.2rem;
  }
  font-weight: 700;
  color: black;
  font-size: 1.2rem;

  h1 {
    font-size: 1.5rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <span>Gn</span>News
      </Logo>
      <h1>Breaking News</h1>
    </StyledHeader>
  );
};

export default Header;
