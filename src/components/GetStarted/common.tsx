import styled from 'styled-components';
import { tabletMediaQuery } from "src/themes/mediaQuery";

export const Container = styled.div`
  display: grid;
  grid-row-gap: ${(props) => props.theme.spacings.lg};
`;
export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.light.lightGray300};
`;
export const SubContainer = styled.div`
  display: grid;
  grid-row-gap: ${(props) => props.theme.spacings.md};
`;
export const ListWithoutDeco = styled.li`
  list-style: none;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const HintText = styled.p`
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
`;

export const ButtonGridBox = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: auto;
    grid-column-gap: ${props => props.theme.spacings.md};
    width: fit-content;
    @media ${tabletMediaQuery} {
        grid-auto-flow: row;
        grid-column-gap: 0px;
        grid-row-gap: ${props => props.theme.spacings.sm};
    }
`;