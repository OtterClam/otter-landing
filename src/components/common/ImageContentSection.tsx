import styled from 'styled-components'
import { PropsWithChildren } from 'react'
import { Container, LeftPaddingContainer, RightPaddingContainer } from 'src/components/common/Container'
import Image from 'next/image'
import ImageBankDeco from 'src/components/Home/ImageContentSections/images/image-bank_deco.png'
import { tabletMediaQuery } from 'src/themes/mediaQuery'
import RoundedButton, { ButtonType } from './RoundedButton'

const FullSizeContainer = styled.div<{ $imageRatio: number }>`
  position: relative;
  flex-basis: 100%;
  width: 100%;
  padding-bottom: ${(props) => props.$imageRatio}%;
`

type Sizing = 'full' | 'fullPadding' | 'leftPadding' | 'rightPadding'
const _Container = ({
  sizing,
  imageRatio = 100,
  children,
}: PropsWithChildren<{ sizing: Sizing; imageRatio?: number }>) => {
  if (sizing === 'full') return <FullSizeContainer $imageRatio={imageRatio}>{children}</FullSizeContainer>
  if (sizing === 'leftPadding') return <LeftPaddingContainer>{children}</LeftPaddingContainer>
  if (sizing === 'rightPadding') return <RightPaddingContainer>{children}</RightPaddingContainer>
  return <Container>{children}</Container>
}

type ImageProps = {
  sizing: Sizing
  imageRatio?: number
  image: StaticImageData
  alt: string
}

const ImageSection = ({ sizing, imageRatio, image, alt }: ImageProps) => {
  return (
    <_Container sizing={sizing} imageRatio={imageRatio}>
      <Image
        src={image}
        alt={alt}
        layout={sizing === 'full' ? 'fill' : 'responsive'}
        height={sizing === 'full' ? undefined : image.height}
        width={sizing === 'full' ? undefined : image.width}
        objectFit={sizing === 'full' ? 'cover' : 'contain'}
      />
    </_Container>
  )
}

const StyledH2 = styled.h2`
  margin-bottom: ${(props) => props.theme.spacings.md};
`
const StyledP = styled.p`
  margin-bottom: 25px;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  @media ${tabletMediaQuery} {
    text-align: center;
  }
`
const DecoContainer = styled.div`
  position: relative;
  margin: 0;
  @media ${tabletMediaQuery} {
    margin: auto;
  }
`

type TextProps = {
  sizing: Sizing
  title: string
  content: string
}
type ButtonProps = {
  type: ButtonType
  text: string
  href?: string
  target?: string
}
interface ContentProps {
  hasDeco?: boolean
  textProps: TextProps
  buttonProps: ButtonProps
}
const ContentSection = ({ hasDeco = false, textProps, buttonProps }: ContentProps) => {
  return (
    <_Container sizing={textProps.sizing}>
      <ContentContainer>
        {hasDeco && (
          <DecoContainer>
            <Image src={ImageBankDeco} height={32} width={116} layout="fixed" objectFit="contain" alt="deco" />
          </DecoContainer>
        )}
        <StyledH2>{textProps.title}</StyledH2>
        <StyledP>{textProps.content}</StyledP>
        <RoundedButton {...buttonProps} />
      </ContentContainer>
    </_Container>
  )
}

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
`

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
`

type Layout = 'image-left' | 'image-right'
interface Props {
  layout?: Layout
  hasDeco?: boolean
  textProps: TextProps
  buttonProps: ButtonProps
  imageProps: ImageProps
}
const ImageContentSection = ({ layout = 'image-left', hasDeco, textProps, buttonProps, imageProps }: Props) => {
  if (layout === 'image-right')
    return (
      <ParentGridBox className="image-content">
        <ContentSection hasDeco={hasDeco} textProps={textProps} buttonProps={buttonProps} />
        <ImageSection {...imageProps} />
      </ParentGridBox>
    )
  return (
    <ReverseParentGridBox className="image-content">
      <ImageSection {...imageProps} />
      <ContentSection hasDeco={hasDeco} textProps={textProps} buttonProps={buttonProps} />
    </ReverseParentGridBox>
  )
}

export default ImageContentSection
