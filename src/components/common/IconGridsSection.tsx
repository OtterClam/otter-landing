import { PropsWithChildren } from 'react';
import { laptopMediaQuery } from "src/themes/mediaQuery";
import styled from 'styled-components';
import { Container } from './Container';

type Theme = 'dark' | 'light';
const StyledContainer = styled(Container)`
  text-align: center;
`;
const StyledH2 = styled.h2<{ $theme: Theme }>`
  color: ${(props) =>
    props.$theme === 'dark'
      ? props.theme.colors.common.white
      : props.theme.colors.common.otterDark};
`;
const StyledContent = styled.h3<{ $theme: Theme }>`
  color: ${(props) =>
    props.$theme === 'dark'
      ? props.theme.colors.common.white
      : props.theme.colors.common.otterDark};
  margin-bottom: ${(props) => props.theme.spacings.lg};
`;
const GridBox = styled.div <{$count: number}>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$count}, minmax(0, 1fr));
  grid-column-gap: 30px;
  margin-bottom: ${(props) => props.theme.spacings.lg};
  @media ${laptopMediaQuery} {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }
  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

interface Props {
  title: string;
  content: string;
  theme: Theme;
  grids: JSX.Element[];
}
const IconGridsSection = ({
  theme,
  title,
  content,
  children,
  grids,
}: PropsWithChildren<Props>) => {
  return (
    <StyledContainer>
      <StyledH2 $theme={theme}>{title}</StyledH2>
      <StyledContent $theme={theme}>{content}</StyledContent>
      <GridBox $count={grids.length}>{grids}</GridBox>
      {children}
    </StyledContainer>
  );
};
export default IconGridsSection;
