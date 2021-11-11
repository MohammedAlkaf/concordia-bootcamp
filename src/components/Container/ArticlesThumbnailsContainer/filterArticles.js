// this function is created to filter the articles array based on a one single catagory
// the pageId is obtained via useParams()method in ArticlesThumbnailsContainer component
export const getFilteredArticles = (pageId,sortedArticles) =>{

    let filteredArticles = [];

    switch(pageId){
        case "view-all":
            filteredArticles = sortedArticles;
            break;
        case "health-and-wellness":
            filteredArticles = sortedArticles.filter( (item) => {
                return item.fields.category.toLowerCase().includes('health and wellness')
            });
            break;
        case "for-organization":
            filteredArticles = sortedArticles.filter( (item) => {
                return item.fields.category.toLowerCase().includes('for organization')
            });
            break;
        case "life-at-dialogue":
            filteredArticles = sortedArticles.filter( (item) => {
                return item.fields.category.toLowerCase().includes('life at dialogue')
            });
            break;
        case "products-update":
            filteredArticles = sortedArticles.filter( (item) => {
                return item.fields.category.toLowerCase().includes('products update')
            });
            break;
        case "news":
            filteredArticles = sortedArticles.filter( (item) => {
                return item.fields.category.toLowerCase().includes('news')
            });
            break;
        case "humanizing-healthcare":
            filteredArticles = sortedArticles.filter( (item) => {
                return item.fields.category.toLowerCase().includes('humanizing healthcare')
            });
            break;
    }

    return filteredArticles
}