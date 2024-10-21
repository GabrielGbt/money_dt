import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./themes/default";



export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${defaultTheme.green500};
    }

    body {
        background-color: ${defaultTheme.gray800};
        color: ${defaultTheme.gray100};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif;
    }
`