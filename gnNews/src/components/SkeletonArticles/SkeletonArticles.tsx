import {
  Skeleton,
  Image,
  Description,
  Title,
  ItemWrapper,
  Wrapper,
} from "./SkeletonArticlesStyles";

const SkeletonArticles = () => {
  return (
    <Skeleton>
      <Wrapper>
        <ItemWrapper height="10rem">
          <Image />
        </ItemWrapper>
        <ItemWrapper height="2rem">
          <Title />
        </ItemWrapper>
        <ItemWrapper height="4rem">
          <Description />
        </ItemWrapper>
      </Wrapper>
    </Skeleton>
  );
};

export default SkeletonArticles;
