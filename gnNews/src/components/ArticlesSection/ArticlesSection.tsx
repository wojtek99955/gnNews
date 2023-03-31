import { useGetNewsQuery } from "../../api/newsApiSlice";
import Article from "../Article/Article";
import SkeletonArticles from "../SkeletonArticles/SkeletonArticles";
import {
  Section,
  ArticlesContainer,
  CurrentCountry,
  Error,
} from "./ArticlesSectionStyle";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getFlag } from "../../helpers/getFlag";
import { Routes, Route, useParams } from "react-router-dom";

const ArticlesSection = () => {
  const params = useParams();
  const countryNameUrl = params.countryName;

  const currentCountry = useSelector((state: RootState) => state.country.value);

  const queryParam = countryNameUrl ? countryNameUrl : currentCountry;
  console.log(queryParam);
  console.log(currentCountry);
  const {
    data: articles,
    isLoading,
    isSuccess,
    isError,
  } = useGetNewsQuery(queryParam);

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
      return <Article articleData={article} key={article.title} />;
    });
  }

  if (isError) {
    content = <Error>Sorry, an error has occurred</Error>;
  }

  const currentFlag = getFlag(countryNameUrl! || currentCountry);
  console.log(currentFlag);

  const flagImgSrc = currentFlag.flag_img;

  const currentView = useSelector(
    (state: RootState) => state.articlesView.value
  );

  return (
    <Section>
      <CurrentCountry>
        <h2>News from </h2>
        <img src={flagImgSrc} alt="" />
      </CurrentCountry>
      <ArticlesContainer currentView={currentView}>{content}</ArticlesContainer>
    </Section>
  );
};

export default ArticlesSection;
