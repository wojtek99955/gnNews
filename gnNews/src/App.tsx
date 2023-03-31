import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";
import ArticlesSection from "./components/ArticlesSection/ArticlesSection";
import GlobalStyle from "./assets/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

const SectionMiddle = styled.div`
  display: flex;
`;

function App() {
  return (
    <div>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <SectionMiddle>
          <Sidebar />
          <Routes>
            <Route path="/" element={<ArticlesSection />} />
            <Route path="/country/:countryName" element={<ArticlesSection />} />
          </Routes>
        </SectionMiddle>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
