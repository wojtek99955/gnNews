import styled from "styled-components";
import ArticlesView from "../../features/articlesView/ArticlesView";
import Logo from "../Logo";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  background-color: white;
  gap: 3rem;
  min-height: 4rem;
  padding: 0 1rem;
  z-index: 2;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.25) 0px 7px 29px 0px;

  h1 {
    font-size: 1.5rem;
    color: #393e46;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <h1>Breaking News</h1>
      <ArticlesView />
    </StyledHeader>
  );
};

export default Header;
