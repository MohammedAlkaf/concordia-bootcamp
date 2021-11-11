import styled from "styled-components";

const BackgroundLayer = () => {
    return(
        <Background>

        </Background>
    )
}


const Background = styled.div`
    height: 900px;
    width:100%;
    position: absolute;
    top: 0;
    z-index: -5;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 77%, rgba(249,249,249,0) 100%);
`;

export default BackgroundLayer