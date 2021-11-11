import { 
    Wrapper,
    ArticleImg,
    ArticleContent,
    ArticleTitle,
    ArticleSummary,
    ReadMoreLink
} from './styled-components';

const RecentFeaturedArticle = ({store})=>{
    
    const { featuredArticle} = store;

    console.log("inside featured Article: " , featuredArticle);

    return(
        <>
        { featuredArticle && 
            <Wrapper>

                <ArticleImg 
                    src = {"https://www.dialogue.co/hubfs/BLOG_HHC2021-iCBT_hero.jpg"}
                />

                <ArticleContent>      

                    <ArticleTitle>
                        {featuredArticle.fields.title}
                    </ArticleTitle>

                    <ArticleSummary>
                        {featuredArticle.fields.content}
                    </ArticleSummary>

                    <ReadMoreLink>
                        Read More
                    </ReadMoreLink>

                </ArticleContent>

            </Wrapper>
        }
        </>
    );

}

export default RecentFeaturedArticle