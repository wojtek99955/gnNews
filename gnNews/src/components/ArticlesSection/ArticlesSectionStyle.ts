import styled from "styled-components";
import { device } from "../../assets/device";

interface Props {
  currentView: string;
}

export const Section = styled.section`
  background-color: #e2ecfe;
  width: 100%;
  min-height: calc(100vh - 4rem);
  position: relative;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    width: calc(100vw - 6rem);
    left: 5rem;
  }
`;

export const ArticlesContainer = styled.div<Props>`
  display: grid;
  grid-template-columns: ${({ currentView }) =>
    currentView === "grid" ? "repeat(auto-fit, minmax(18rem, 1fr))" : "1fr"};
  gap: 2rem;
  padding: 2rem;
`;

export const CurrentCountry = styled.div`
  background-color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: auto;
  border-radius: 12px;
  margin-top: 2rem;

  h2 {
    color: #393e46;
  }

  img {
    width: 3rem;
  }
`;

export const Error = styled.div`
  color: #dd5353;
`;
