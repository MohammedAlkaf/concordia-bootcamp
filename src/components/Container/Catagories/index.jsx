
import {
    Wrapper,
    Header,
    ButtonsContainer,
    CatagoryButton
} from './styled-components';


const CatagoriesButtons = () => {

    const CatagoriesArr = [
        "VIEW ALL",
        "HEALTH AND WELLNESS",
        "FPR ORGANIZATION",
        "LIFE AT DIALOGUE",
        "PRODUCT UPDATEs",
        "NEWS",
        "HUMANIZING HEATHCARE"
    ];
    return(

        <Wrapper>
            <Header>
                Catagories
            </Header>

            <ButtonsContainer>
                {CatagoriesArr.map( (catagory) => {
                    return(
                        <CatagoryButton key = {Math.random()*1000000}>
                            {catagory}
                        </CatagoryButton>
                    );
                })}
            </ButtonsContainer>
        </Wrapper>
    );
}

export default CatagoriesButtons