import { createGlobalStyle } from "styled-components";
import circle from "../assets/Ellipse.svg";

export const GlobalStyles = createGlobalStyle`
    body {
    background-image: url(${circle});
    background-repeat: no-repeat;
    background-color: #EAF2F2;
    font-family: 'Noto Sans', sans-serif;
    }

    h1, h3, p {
        margin: 0;
        padding: 0;
    }
`;
