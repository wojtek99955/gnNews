import styled from "styled-components";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 110;
`;

export const Wrapper = styled(motion.div)`
  background-color: white;
  max-width: 600px;
  height: auto;
  padding: 2rem 0;
  border-radius: 12px;
  padding: 1.5rem;

  img {
    width: 100%;
    border-radius: 12px;
  }
`;

export const Source = styled.a`
  text-decoration: none;
  display: block;
  background-color: #3b7fe9;
  color: white;
  padding: 0.8rem;
  border-radius: 8px;
  text-align: center;
  max-width: 10rem;
  margin: auto;
  margin-top: 1rem;
`;

export const CloseIcon = styled(CloseOutline)`
  width: 3.5rem;
  color: white;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;
