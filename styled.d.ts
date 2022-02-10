import 'styled-components';
import { Colors } from 'src/themes/styled-components/colors';
import { Spacings } from 'src/themes/styled-components/spacings';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Colors;
        spacings: Spacings;
  }
}
