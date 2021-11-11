import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width:49%;
    margin-bottom: 20px;
    min-width: 400px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    transition: filter 0.2s ease-in-out;
    &:hover{
        outline: 0.5px solid grey;
        filter: opacity(0.9);
    }
`;

export const ArticleImg = styled.img`
    width:100%;
`;


export const ArticleHeader = styled.h1`
    margin-top:0px;
    margin-bottom:50px;
`;

export const ArticleContainer = styled.div`
    background: white;
    padding: 15px;
    flex-grow : 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ArticleCatagory = styled.h2`
font-weight: normal;
font-size: 1.3em;
position: relative;
`;




