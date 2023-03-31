import styled from "styled-components";
import { Grid } from "@styled-icons/evaicons-solid/Grid";
import { TableRows } from "@styled-icons/material-rounded/TableRows";
import { setArticlesView } from "./articlesViewSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Container = styled.div`
  margin-left: auto;
`;

const GridIcon = styled(Grid)`
  width: 3rem;
  cursor: pointer;
  color: #3b7fe9;
`;

const RowsIcon = styled(TableRows)`
  width: 3rem;
  cursor: pointer;
  color: #3b7fe9;
`;
const ArticlesView = () => {
  const dispatch = useDispatch();
  const currentView = useSelector(
    (state: RootState) => state.articlesView.value
  );

  const handleShowRows = () => {
    dispatch(setArticlesView("rows"));
  };

  const handleShowGrid = () => {
    dispatch(setArticlesView("grid"));
  };

  return (
    <Container>
      {currentView === "grid" ? (
        <RowsIcon onClick={handleShowRows} />
      ) : (
        <GridIcon onClick={handleShowGrid} />
      )}
    </Container>
  );
};

export default ArticlesView;
