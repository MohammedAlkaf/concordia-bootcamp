import React, { useState, useEffect, useContext } from "react";
import { getAllArticles } from "../services/contentful";

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async function fetchArticles() {
      setArticles(await getAllArticles());
    })();
  }, []);

  // TODO: Update the method below to return the latest featured article from the list of articles
  const getFeatured = () => {

    // sort array of articles by publish date ( most recent to oldest) using sort method
    const sortedArticles = articles.sort((a,b) => {

      return new Date(b.fields.date) - new Date(a.fields.date);
  
    });

    // filter the articles array and find all articles that are marked featured
    const allFeaturedArticles = sortedArticles.filter( (article) => {

      return article.fields.featured === true;

    })

    // get the one article that is most recent and featured
    setFeaturedArticle(allFeaturedArticles[0]);

    };

    // call the getFeatured function toobtained the most featured article
    // every time 'articles' value chanages, call the function to obtain updated value
    // of 'featuredArticle'  
    useEffect(()=>{
      getFeatured();
    },[articles])

  return (
    <StoreContext.Provider
      value={{ featuredArticle, getFeatured, articles}}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
