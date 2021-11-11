import styled from "styled-components";
import { useStore } from "../../../contexts/Store";
import ArticleThumbnail from "./IndividualThumbnail";

const ArticlesThumbnailsContainer = ({store}) => {

    const { articles } = store;

    
    const sortedArticles = articles.sort((a,b) => {
        
        return new Date(b.fields.date) - new Date(a.fields.date);
        
    });
    
    console.log("inside ArticlesThumbnailsContainer: ",articles);
    
    return(

        <ArticlesContainer>
            {sortedArticles.map( (item,index) => {
                return(
                    <ArticleThumbnail 
                        key = {item.sys.id}
                        title = {item.fields.title}
                        catagory = {item.fields.category}
                        index = {index}
                    />
                );
            })}
        </ArticlesContainer>

    );
}


const ArticlesContainer = styled.div`
    display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

    @media (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
`;

export default ArticlesThumbnailsContainer