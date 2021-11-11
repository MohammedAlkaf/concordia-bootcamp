// A simple component to create the thumbnail or article card
// this component will called to map the articles array

import {
    Wrapper,
    ArticleImg,
    ArticleHeader,
    ArticleCatagory,
    ArticleContainer
    } from './styled-component';
    
const ArticleThumbnail = ({title,catagory}) => {

    return(

        <Wrapper>

            <ArticleImg 
                src = {`https://picsum.photos/id/${Math.round(Math.random()*100)}/400`}
            />

            <ArticleContainer>
                <ArticleHeader>
                    {title}
                </ArticleHeader>

                <ArticleCatagory>
                    {catagory}
                </ArticleCatagory>
            </ArticleContainer>

        </Wrapper>


    );
}

export default ArticleThumbnail