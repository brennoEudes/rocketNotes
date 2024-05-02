import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: ${({ theme }) =>
      theme.COLORS.BACKGROUND_900}; // estilizações definidas em theme.js
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialised;
}

body, input, button, textarea {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
    outline: none; // removendo qq linha dos contornos
}


a {
    text-decoration: none;
}

a, button {
    cursor: pointer;
    transition: filter 0.2s;
}

a:hover, button:hover {
    filter: brightness(0.9);
}
`;
