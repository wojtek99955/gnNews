import { useGetNewsQuery } from "../../api/newsApiSlice";
import Article from "../Article/Article";
import SkeletonArticles from "../SkeletonArticles/SkeletonArticles";
import { Section, ArticlesContainer } from "./ArticlesSectionStyle";

const ArticlesSection = () => {
  const {
    data: articles,
    isLoading,
    isSuccess,
    isError,
  } = useGetNewsQuery(null);

  const loader = [...Array(20)].map((skeleton, index) => {
    index += 1;
    return <SkeletonArticles key={index} />;
  });

  let content;

  if (isLoading) {
    content = loader;
  }

  if (isSuccess) {
    content = articles?.articles?.map((article: any) => {
      return <Article articleData={article} />;
    });
  }

  if (isError) {
    content = <div>Sorry, an error has occurred</div>;
  }
  return (
    <Section>
      <ArticlesContainer>{content} </ArticlesContainer>
    </Section>
  );
};

export default ArticlesSection;
