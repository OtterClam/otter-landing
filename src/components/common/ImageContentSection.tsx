import styled from 'styled-components';
import { PropsWithChildren } from 'react';
import {
  Container,
  LeftPaddingContainer,
  RightPaddingContainer,
} from 'src/components/common/Container';
import Image from 'next/image';
import { tabletMediaQuery } from 'src/themes/mediaQuery';
import RoundedButton, { ButtonType } from '../Otto/common/RoundedButton';

const FullSizeContainer = styled.div<{ $imageRatio: number }>`
  position: relative;
  flex-basis: 100%;
  width: 100%;
  padding-bottom: ${(props) => props.$imageRatio}%;
`;

type Sizing = 'full' | 'fullPadding' | 'leftPadding' | 'rightPadding';
const _Container = ({
  sizing,
  imageRatio = 100,
  children,
}: PropsWithChildren<{ sizing: Sizing; imageRatio?: number }>) => {
  if (sizing === 'full')
    return (
      <FullSizeContainer $imageRatio={imageRatio}>{children}</FullSizeContainer>
    );
  if (sizing === 'leftPadding')
    return <LeftPaddingContainer>{children}</LeftPaddingContainer>;
  if (sizing === 'rightPadding')
    return <RightPaddingContainer>{children}</RightPaddingContainer>;
  return <Container>{children}</Container>;
};

type ImageProps = {
  sizing: Sizing;
  imageRatio?: number;
  src: string;
  alt: string;
};

const ImageSection = ({ sizing, imageRatio, src, alt }: ImageProps) => {
  return (
    <_Container sizing={sizing} imageRatio={imageRatio}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit={sizing === 'full' ? 'cover' : 'contain'}
      />
    </_Container>
  );
};

const StyledH2 = styled.h2`
  margin-bottom: ${(props) => props.theme.spacings.md};
`;
const StyledP = styled.p`
  margin-bottom: 25px;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  @media ${tabletMediaQuery} {
    text-align: center;
  }
`;

type TextProps = {
  sizing: Sizing;
  title: string;
  content: string;
};
type ButtonProps = {
  type: ButtonType;
  text: string;
  href?: string;
};
interface ContentProps {
  textProps: TextProps;
  buttonProps: ButtonProps;
}
const ContentSection = ({ textProps, buttonProps }: ContentProps) => {
  return (
    <_Container sizing={textProps.sizing}>
      <ContentContainer>
        <StyledH2>{textProps.title}</StyledH2>
        <StyledP>{textProps.content}</StyledP>
        <RoundedButton {...buttonProps} />
      </ContentContainer>
    </_Container>
  );
};

const ParentGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  @media ${tabletMediaQuery} {
    grid-template-columns: auto;
    > div:nth-child(1) {
      grid-row: 1;
    }
  }
`;

const ReverseParentGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  @media ${tabletMediaQuery} {
    grid-template-columns: auto;
    > div:nth-child(2) {
      grid-row: 1;
    }
  }
`;

type Layout = 'image-left' | 'image-right';
interface Props {
  layout?: Layout;
  textProps: TextProps;
  buttonProps: ButtonProps;
  imageProps: ImageProps;
}
const ImageContentSection = ({
  layout = 'image-left',
  textProps,
  buttonProps,
  imageProps,
}: Props) => {
  if (layout === 'image-right')
    return (
      <ParentGridBox className="image-content">
        <ContentSection textProps={textProps} buttonProps={buttonProps} />
        <ImageSection {...imageProps} />
      </ParentGridBox>
    );
  return (
    <ReverseParentGridBox className="image-content">
      <ImageSection {...imageProps} />
      <ContentSection textProps={textProps} buttonProps={buttonProps} />
    </ReverseParentGridBox>
  );
};

export default ImageContentSection;
