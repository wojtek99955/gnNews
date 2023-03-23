import styled from "styled-components";
import { useGetNewsQuery } from "../../api/newsApiSlice";
import { useState, useEffect } from "react";
const StyledFooter = styled.footer`
  width: 100%;
  background-color: white;
`;

const Footer = () => {
  //   const { data: articles } = useGetNewsQuery(null);

  //   let articlesNumber = articles.articles.length;

  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date()), 1000;
    });
  }, []);

  return (
    <StyledFooter>
      {/* <div>Articles number: {articlesNumber}</div> */}
      <div>{time.toLocaleTimeString()}</div>
    </StyledFooter>
  );
};

export default Footer;
