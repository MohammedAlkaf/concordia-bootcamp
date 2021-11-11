import {
    Wrapper,
    ArticleImg,
    ArticleHeader,
    ArticleCatagory,
    ArticleContainer
    } from './styled-component';
    
const ArticleThumbnail = ({title,catagory,index}) => {

    return(

        <Wrapper>

            <ArticleImg 
                src = {`https://source.unsplash.com/random/800x800/?img=${index}`}
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