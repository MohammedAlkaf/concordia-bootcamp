import { useState } from "react";
import ArticleThumbnail from "./IndividualThumbnail";
import { useParams } from "react-router-dom";
import { getFilteredArticles } from "./filterArticles";
import {ArticlesContainer,LoadeMoreButton} from './styled-component';

const ArticlesThumbnailsContainer = ({store}) => {

    // get the page id ( based on the catagory ) using useParams
    let { pageId } = useParams();

    // get all articles from context API

    const { articles } = store;
    // create a function to increase the number of article cards shown in the page
    const handleLoadClick = () => {
        setLimitShownArticles(limitShownArticles + 6);
    }

    // create a useState to update the number of articles shown in the page
    const [limitShownArticles, setLimitShownArticles] = useState(6);

    // create an initial empty array to get filtered array of articles based ona certial catagory
    let allArticlesFilteredByCatagory = [];

    // create an initial empty array to get the number of showm articles in the page
    let shownArticles = [];

    // sort articles from most recent to oldest
    const sortedArticles = articles.sort((a,b) => {
        
        return new Date(b.fields.date) - new Date(a.fields.date);
        
    });
    
    // we need to filter displayed articles based on the catagory chosen
    // call the getFilteredArticles and pass the page id and all sorted articles and return all articles in 
    // in a certain catagory based in the pageId provided
    if (pageId){
        allArticlesFilteredByCatagory = getFilteredArticles(pageId,sortedArticles);
    } else {
        // if no pageId is passed ( an empty pageId ) then return all sorted articles
        allArticlesFilteredByCatagory = sortedArticles;
    }

    // determine how many articles to show in the page each time this component is rendered
    if (allArticlesFilteredByCatagory.length > 6){
        shownArticles = allArticlesFilteredByCatagory.filter((item,index) => index < limitShownArticles);
    }
    else {
        // If the # of articles is already less then 6 then show them all
        shownArticles = allArticlesFilteredByCatagory;
    }

    return(
        <>
            <ArticlesContainer>
                {shownArticles.map( (item) => {
                    return(
                        <ArticleThumbnail 
                            key = {item.sys.id}
                            title = {item.fields.title}
                            catagory = {item.fields.category}
                        />
                    );
                })}

            </ArticlesContainer>
            
            {/* show the 'load more' button only when the # of articles in that specefic catagory is
            is more than 6 and the number of shown articles is equal to all available articles in that
            specefic vatagory */}
            { (allArticlesFilteredByCatagory.length > 6 && shownArticles.length < allArticlesFilteredByCatagory.length) &&
                <LoadeMoreButton onClick = { () => handleLoadClick() }>
                    Load More
                </LoadeMoreButton>
            }
        </>

    );
}

export default ArticlesThumbnailsContainer