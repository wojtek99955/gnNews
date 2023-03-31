import styled from "styled-components";
import { device } from "../../assets/device";

export const CountriesContainer = styled.div`
  background-color: #3b7fe9;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0rem;
  padding: 0.3rem;

  @media ${device.tablet} {
    left: 1rem;
    border-radius: 12px;
    padding: 0;
  }

  img {
    width: 1.3rem;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 12px;
  }
  li {
    cursor: pointer;
    color: white;
    font-weight: 500;
    text-transform: capitalize;
    font-size: 1.2rem;
    transition: background-color 300ms ease;
    border-radius: 12px;

    &:hover {
      background-color: #8bb3f2;
    }

    span {
      display: none;

      @media ${device.tablet} {
        display: block;
      }
    }

    a {
      text-decoration: none;
      color: white;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      padding: 0.5rem;
      font-size: 1.2rem;
      border-radius: 12px;
      &.active {
        background-color: #8bb3f2;
      }
    }
  }
`;
