import styled from "styled-components";
import {Link} from "react-router-dom";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: #393e46;
  cursor: pointer;

  span {
    background-color: #3b7fe9;
    padding: 0.5rem;
    border-radius: 8px;
    color: white;
    font-weight: 700;
    font-size: 1.2rem;
  }

  div {
    color: #393e46;
    font-weight: 700;
    font-size: 1.2rem;
  }
`;
const Logo = () => {
  return (
    <Link to="/">
    <LogoContainer>
      <span>Gn</span>
      <div>News</div>
    </LogoContainer>
    </Link>
  );
};

export default Logo;
