// A simple component to to show the Blog title
import styled from "styled-components";

const BlogTitle = () => {

    return(
        <HeaderTitle>
            Blog
        </HeaderTitle>
    );
}

const HeaderTitle = styled.h1`
margin: 45px 0px;
font-size: 5em;
`

export default BlogTitle 