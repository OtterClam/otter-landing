import styled from 'styled-components';
import { tabletMediaQuery } from 'src/themes/mediaQuery';

export const Container = styled.div`
  position: relative;
  padding: 80px 245px;
  @media ${tabletMediaQuery} {
    padding: ${(props) =>
      `${props.theme.spacings.lg} ${props.theme.spacings.md}`};
  }
`;

export const LeftPaddingContainer = styled.div`
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 245px;
  @media ${tabletMediaQuery} {
    padding: ${(props) => props.theme.spacings.lg} ${(props) => props.theme.spacings.md};
  }
`;

export const RightPaddingContainer = styled.div`
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-right: 245px;
  @media ${tabletMediaQuery} {
    padding: ${(props) => props.theme.spacings.lg} ${(props) => props.theme.spacings.md};
  }
`;
