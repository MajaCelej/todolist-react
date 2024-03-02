import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: Roboto;
        background-color: rgb(218, 218, 218);
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    .body {
        font-family: 'Roboto', sans-serif;
    }
`;