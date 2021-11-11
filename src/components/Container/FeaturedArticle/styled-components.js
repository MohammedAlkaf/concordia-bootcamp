import styled from "styled-components";


// ------------ named export styled components ------------
export const Wrapper = styled.div`
    display:flex;
    border-top: 5px solid black;
    border-bottom: 5px solid black;
    padding:50px 0px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ArticleImg = styled.img`
    width:50%;

    @media (max-width: 768px) {
        width:100%;
        margin-bottom: 20px;
    }

`;

export const ArticleContent = styled.div`
    margin: 0px 20px;
`;

export const ArticleTitle = styled.h1``;

export const ArticleSummary = styled.p`
    margin-top:15px;
    margin-bottom:35px;
`;

export const ReadMoreLink = styled.a`
`;

