import styled from "styled-components";

export const ArticlesContainer = styled.div`
    display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

    @media (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
`;

export const LoadeMoreButton = styled.button`
    margin-bottom: 50px;
    font-size: 1.2em;
    position: relative;
    left: calc(50% - 80px);
    padding: 10px 25px;
    width:150px;
    border: 3px solid #c4e6f1;
    background:#c4e6f1;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    border-radius: 50px;
    transition: background 0.4s ease-out;
    
    &:hover{
        background: transparent;
    }
`;