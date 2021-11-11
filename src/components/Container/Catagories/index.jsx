// This component creates the catagory button to navigate thru the articles by catagory
import {useEffect,useRef} from 'react';
import {
    Wrapper,
    Header,
    ButtonsContainer,
    CatagoryNavLink
} from './styled-components';

const CatagoriesButtons = () => {

    // This is may not be ideal, but I created an array for all possible catagories in the articles
    // Note: all catagories shown in 'CatagoriesArr' in are more thsn the ones available
    // in the context API 
    const CatagoriesArr = [
        "VIEW ALL",
        "HEALTH AND WELLNESS",
        "FOR ORGANIZATION",
        "LIFE AT DIALOGUE",
        "PRODUCT UPDATES",
        "NEWS",
        "HUMANIZING HEALTHCARE"
    ];

    // This is also not ideal, I am creating the like extentions ( e.g http://localhost:3000/health-and-wellness)
    // to pass then later as a 'pageId' and render the selected catagory
    const CatagoriesLinkExtentionArr = [
        "view-all",
        "health-and-wellness",
        "for-organization",
        "life-at-dialogue",
        "products-update",
        "news",
        "humanizing-healthcare"
    ];

    return(

        <Wrapper>
            <Header>
                Catagories
            </Header>
                <ButtonsContainer>
                    {CatagoriesArr.map( (catagory,index) => {

                        if(index === 0){
                            return(
                                <CatagoryNavLink
                                    key = {Math.random()*1000000}
                                    // the link at index is "VIEW ALL"
                                    // It's considered our home page
                                    exact to = {`/`}
                                >
                                    {catagory}
                                </CatagoryNavLink>
                            );
                        } 

                        else {
                            return(
                                <CatagoryNavLink

                                    // creating a random number of the key to avoid the warning in the dev tools console
                                    key = {Math.random()*1000000}
                                    to = {`/${CatagoriesLinkExtentionArr[index]}`}
                                >
                                    {catagory}
                                </CatagoryNavLink>
                            );
                        }

                    })}
                </ButtonsContainer>
        </Wrapper>
    );
}

export default CatagoriesButtons