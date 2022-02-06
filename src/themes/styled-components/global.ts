import { createGlobalStyle } from 'styled-components';
import { tabletMediaQuery } from "../mediaQuery";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Gilroy';
  font-weight: 700;
  background: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1 {
    font-size: 100px;
    line-height: 110px;
    font-weight: 800;
}
h2 {
    font-size: 48px;
    line-height: 72px;
    font-weight: 800;
}
h3 {
    font-size: 24px;
    line-height: 36px;
    font-weight: 700;
}
p {
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
}

@media ${tabletMediaQuery} {
  h1 {
    font-size: 40px;
    line-height: 40px;
    font-weight: 800;
}
h2 {
    font-size: 36px;
    line-height: 54px;
    font-weight: 800;
}
h3 {
    font-size: 20px;
    line-height: 30px;
    font-weight: 700;
}
p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
}
}

.container {
    padding: 94px 245px;
  }
  
  @media screen and (max-width: 1300px) {
    .container {
      padding: 100px 20px;
    }
  }
  
  @media screen and (max-width: 598px) {
    .container {
      padding: 40px 20px;
    }
  }
`;

export default GlobalStyle;