import { DefaultTheme } from 'styled-components';
import { colors } from './colors';
import { spacings } from "./spacings";
import GlobalStyle from './global';
const theme: DefaultTheme = {
  colors,
  spacings
};

export { theme, GlobalStyle };
