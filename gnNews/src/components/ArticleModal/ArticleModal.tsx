import ReactDOM from "react-dom";
import { Author } from "../Article/Article";
import { useRef } from "react";

import { Container, Wrapper, Source, CloseIcon } from "./ArticleModalStyle";

interface Props {
  setOpenArticleModal: React.Dispatch<React.SetStateAction<boolean>>;
  articleData: any;
}

const ArticleModal = ({ setOpenArticleModal, articleData }: Props) => {
  const { author, publishedAt, title, description, urlToImage, content, url } =
    articleData;

  const modalRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  const handleCloseModal = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setOpenArticleModal(false);
    e.stopPropagation();
  };

  const clickOutsideToClose = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === backgroundRef.current) {
      setOpenArticleModal(false);
    }
  };

  return ReactDOM.createPortal(
    <Container
      ref={backgroundRef}
      onClick={clickOutsideToClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CloseIcon onClick={handleCloseModal} />
      <Wrapper
        ref={modalRef}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.6 }}
        transition={{ duration: 0.1 }}
      >
        <img src={urlToImage} alt="" />
        <Author>
          <div>{author}</div>
          <div>{publishedAt}</div>
        </Author>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{content}</p>
        <Source href={url} target="_blank" rel="noreferrer">
          Go to source
        </Source>
      </Wrapper>
    </Container>,
    document.getElementById("article-modal")!
  );
};

export default ArticleModal;
