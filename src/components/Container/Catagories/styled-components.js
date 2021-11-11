import styled from "styled-components";
import { NavLink } from 'react-router-dom';

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

export const CatagoryNavLink= styled(NavLink)`
    padding: 10px 25px;
    margin: 10px;
    border: 3px solid #c4e6f1;
    background: #c4e6f1;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    border-radius: 50px;
    transition: background 0.4s ease-out;

    
    &.active{
        background: transparent;
    }
    
    &:hover{
        background: transparent;
    }

`;

