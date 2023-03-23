import { useState } from "react";
import styled from "styled-components";
import ArticleModal from "../ArticleModal/ArticleModal";
import { AnimatePresence } from "framer-motion";

interface Props {
  articleData: any;
}

const Container = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 16px;
  cursor: pointer;
  position: relative;
  transition: all 200ms ease;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transform: translateY(0.2rem);
  }
`;

const Wrapper = styled.div`
  img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
    object-position: top;
    border-radius: 16px;
    border: none;
    margin-bottom: 1rem;
  }

  div {
    color: #9da7af;
  }

  p {
    color: #9da7af;
  }

  h3 {
    margin-bottom: 1rem;
  }
`;

export const Author = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 1rem;
  div {
    font-size: 0.8rem;
    display: inline-block;
    margin-left: auto;
    color: #9da7af;
  }
`;

const Article = ({ articleData }: Props) => {
  const { author, publishedAt, title, description, urlToImage } = articleData;

  const [openArticleModal, setOpenArticleModal] = useState(false);

  const handleOpenArticleModal = () => {
    setOpenArticleModal(true);
  };
  return (
    <>
      <Container onClick={handleOpenArticleModal}>
        <Wrapper>
          <img src={urlToImage} alt="" />
          <h3>{title}</h3>
          <p>{description?.slice(0, 50)}...</p>
        </Wrapper>
      </Container>
      <AnimatePresence>
        {openArticleModal ? (
          <ArticleModal
            articleData={articleData}
            setOpenArticleModal={setOpenArticleModal}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Article;
