import styled from "styled-components";

export const Section = styled.section`
  background-color: #ebf2fe;
  border-top-left-radius: 20px;
  width: 100%;
  min-height: calc(100vh - 4rem);
  width: calc(100vw - 11rem);
  left: 10rem;
  margin-top: 4rem;
  position: relative;
`;

export const ArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 2rem;
  padding: 2rem;
`;
