import styled from "styled-components";
import { useGetNewsQuery } from "../../api/newsApiSlice";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Logo from "../Logo";
const StyledFooter = styled.footer`
  width: 100%;
  background-color: white;
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 100;

  span {
    color: #393e46;
  }
  div {
    color: #3b7fe9;
    font-weight: 500;
  }
`;

const Footer = () => {
  const currentCountry = useSelector((state: RootState) => state.country.value);
  const { data: articles } = useGetNewsQuery(currentCountry);

  let articlesNumber = articles?.articles.length;

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date()), 1000;
    });
  }, []);

  return (
    <StyledFooter>
      <Logo />
      <div>{time.toLocaleTimeString()}</div>
      <span>Articles number: {articlesNumber}</span>
    </StyledFooter>
  );
};

export default Footer;
