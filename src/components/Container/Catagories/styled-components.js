import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.h1`
    margin: 25px 0px;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
    margin-bottom: 40px;
`;

export const CatagoryButton = styled.button`
    padding: 10px 25px;
    margin: 10px;
    border: 3px solid #c4e6f1;
    background: #c4e6f1;
    
    /* reset buttom styles */
    color: inherit;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    border-radius: 50px;
    transition: background 0.4s ease-out;

    &:hover{
        background: transparent;
    }

    &.active{
        background: transparent;
    }

`;

