import styled from "styled-components";

export const Skeleton = styled.div`
  position: relative;
  background-color: white;
  border-radius: 16px;
  padding: 1rem;
`;

export const Image = styled.div`
  background-color: #eee;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  border-radius: 12px;
  overflow: hidden;
  &::before {
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #fff0, #fff, #fff0);
    content: "";
    animation: flash 1200ms linear infinite;
    position: absolute;
  }
  @keyframes flash {
    0% {
      left: -100%;
    }
    60%,
    100% {
      left: 110%;
    }
  }
`;
export const Author = styled.div``;
export const Description = styled.div`
  background-color: #eee;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  border-radius: 12px;
  overflow: hidden;
  &::before {
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #fff0, #fff, #fff0);
    content: "";
    animation: flash 1200ms linear infinite;
    position: absolute;
  }
  @keyframes flash {
    0% {
      left: -100%;
    }
    60%,
    100% {
      left: 110%;
    }
  }
`;

export const Title = styled.div`
  background-color: #eee;
  width: 100%;
  height: 3rem;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  &::before {
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #fff0, #fff, #fff0);
    content: "";
    animation: flash 1200ms linear infinite;
    position: absolute;
  }
  @keyframes flash {
    0% {
      left: -100%;
    }
    60%,
    100% {
      left: 110%;
    }
  }
`;

interface StyleProps {
  height: string;
}

export const ItemWrapper = styled.div<StyleProps>`
  position: relative;
  margin-bottom: 1rem;
  height: ${({ height }) => height};
`;

export const Wrapper = styled.div`
  padding: 1rem;
  background-color: white;
  width: 100%;
  position: relative;
`;
