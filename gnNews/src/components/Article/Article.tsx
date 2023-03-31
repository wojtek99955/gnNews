import { useState } from "react";
import styled from "styled-components";
import ArticleModal from "../ArticleModal/ArticleModal";
import { AnimatePresence } from "framer-motion";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { getImage } from "../../helpers/getImage";

interface Props {
  articleData: any;
}

interface StyleProps {
  currentView: string;
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

const Wrapper = styled.div<StyleProps>`
  display: ${({ currentView }) => (currentView === "grid" ? "block" : "flex")};
  justify-content: space-between;
  align-items: flex-start;
  img {
    width: ${({ currentView }) => (currentView === "grid" ? "100%" : "24rem")};
    height: ${({ currentView }) =>
      currentView === "grid" ? "12rem" : "16rem"};
    object-fit: cover;
    border-radius: 16px;
    border: none;
    margin-bottom: ${({ currentView }) =>
      currentView === "grid" ? "1rem" : "0"};
  }

  div {
    color: #9da7af;
  }

  p {
    color: #9da7af;
  }

  h3 {
    margin-bottom: 1rem;
    color: #393e46;
  }
`;

const TextWrapper = styled.span<StyleProps>`
  max-width: 25rem;
`;

export const Author = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 1rem;
  div {
    font-size: 0.7rem;
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

  const currentView = useSelector(
    (state: RootState) => state.articlesView.value
  );

  return (
    <>
      <Container onClick={handleOpenArticleModal}>
        <Wrapper currentView={currentView}>
          <img src={getImage(urlToImage)} alt="" />
          <Author>
            <div>{author}</div>
            <div>{publishedAt}</div>
          </Author>
          <TextWrapper currentView={currentView}>
            <h3>{title}</h3>
            <p>{description?.slice(0, 50)}...</p>
          </TextWrapper>
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
