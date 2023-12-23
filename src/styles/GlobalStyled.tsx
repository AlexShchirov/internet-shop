import  { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
    margin: 0;
    font-family: 'Rubik',   -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a{
    text-decoration: unset;
}

ul{
    list-style: none;
}

button{
    background-color: unset;
    border: none;
}
section{
    margin: 0 0 130px 0;
}
`;
