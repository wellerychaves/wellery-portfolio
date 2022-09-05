import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.text};
}

h2 {
  font-family: var(--tajawal);
  font-weight: 500;
  font-size: calc(var(--csize) * 4);
}

.logo {
  all: unset;
  cursor: pointer;
  line-height: 50px;
  padding-bottom: 10px;
  font-family: var(--zen);
  font-size: calc(var(--csize) * 6);
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    font-weight: bold;
  }
}

body {
  background: #121212;
  color: white;
  -webkit-font-smoothing: antialiased;
}

#root {
   --csize: 62.5%;
   
   --zen: "Zen Antique", sans-serif;
   --tajawal: "Tajawal", sans-serif;
   --montserrat: "Montserrat", sans-serif;
}

button {
  cursor: pointer;
}

html.theming,  html.theming * {
    transition: all 1s linear;
}
`;
