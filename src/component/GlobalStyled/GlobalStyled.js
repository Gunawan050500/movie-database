import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: small;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
