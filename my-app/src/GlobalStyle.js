import "modern-normalize";
import { createGlobalStyle } from "styled-components";
import { theme } from "./vars";

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background-color: ${theme.color.white};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  
}

main {
  padding: 30px;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
a {
  text-decoration: none;
}

.disable-scroll {
  overflow: hidden;
}

button {
  cursor: pointer;
}




`;
