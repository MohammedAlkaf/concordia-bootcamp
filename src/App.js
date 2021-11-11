import GlobalStyle from "./base-styles";
import { useStore } from "./contexts/Store";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecentFeaturedArticle from "./components/Container/FeaturedArticle";
import BlogTitle from "./components/Container/BlogTitle";
import CatagoriesButtons from "./components/Container/Catagories";
import ArticlesThumbnailsContainer from "./components/Container/ArticlesThumbnailsContainer";
import BackgroundLayer from "./backgroundLayer";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";

function App() {
  const store = useStore();

  console.log("TODO: use the store to create the base UI", store);

  return (
    <>
      <GlobalStyle />
      <main className="App">
        <BackgroundLayer/>
        <Header />

        {/* TODO: Blog things goes here. Use the components folder! */}
        <Container>

          <BlogTitle/>

          <RecentFeaturedArticle store = {store}/>
          
          <CatagoriesButtons/>

          <Routes >
            <Route path="/:pageId" element={<ArticlesThumbnailsContainer store = {store}/>}/>
          </Routes>

          <Routes >
            <Route exact path="/" element={<ArticlesThumbnailsContainer store = {store}/>}/>
          </Routes>
          
        </Container>

        <Footer />
      </main>
    </>
  );
}

export default App;
