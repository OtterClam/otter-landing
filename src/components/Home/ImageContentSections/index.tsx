import styled from 'styled-components'
import ImageContentSection from 'src/components/common/ImageContentSection'
import ImageBank from './images/image-bank.webp'
import ImageMarket from './images/image-market.webp'
import ImageOtto from 'src/components/Otto/OttoBanner/otto_hero.webp'
import ImageSandbox from './images/image-sandbox.webp'
import { tabletMediaQuery } from 'src/themes/mediaQuery'

const Container = styled.div`
  position: relative;
  .image-content {
    &:nth-child(odd) {
      background-color: ${(props) => props.theme.colors.common.white};
    }
    &:nth-child(even) {
      background-color: ${(props) => props.theme.colors.light.lightGray100};
    }
  }
`
const IntroTextSection = styled(Container)`
  color: ${(props) => props.theme.colors.common.white};
  background-color: ${(props) => props.theme.colors.common.otterDark};
  text-align: center;
  padding-top: 80px;
  padding-bottom: 80px;
`

const StyledH2 = styled.h2`
  font-size: 36px;
  line-height: 54px;
  padding: 0px 20px;
  @media ${tabletMediaQuery} {
    font-size: 24px;
    line-height: 36px;
  }
`

const ImageContentSections = () => {
  return (
    <Container>
      <IntroTextSection>
        <StyledH2>Here we introduce our core features that you can explore...</StyledH2>
      </IntroTextSection>
      <ImageContentSection
        layout="image-right"
        buttonProps={{ text: 'Coming Soon', type: 'disable' }}
        textProps={{
          sizing: 'leftPadding',
          title: 'PAW Market',
          content:
            'Our market will be open and permissionless, so you can bring over your personal portfolio, or add to your collection from our own, in-house created NFT selection.',
        }}
        imageProps={{
          sizing: 'rightPadding',
          imageRatio: 100,
          image: ImageMarket,
          alt: 'market',
        }}
      />
      <ImageContentSection
        layout="image-left"
        buttonProps={{ type: 'solid', text: 'Go to Otto', href: '/otto', target: '_self' }}
        textProps={{
          sizing: 'rightPadding',
          title: 'Otto NFTs',
          content:
            'Ottos are unique and randomly generated 2D NFT Social Avatars created to enhance your online experience. Buy them at the Market using $CLAM, breed them to raise your own Otter family, use them in the Otter Kingdom, or give one to your friends.',
        }}
        imageProps={{
          sizing: 'full',
          imageRatio: 87.5,
          image: ImageOtto,
          alt: 'otto',
        }}
      />
      <ImageContentSection
        layout="image-right"
        hasDeco={true}
        buttonProps={{ type: 'solid', text: 'Go to Treasury', href: 'https://app.otterclam.finance/#/' }}
        textProps={{
          sizing: 'leftPadding',
          title: 'OtterClam Treasury',
          content:
            "Visit the OtterClam Treasury to store your precious PEARLs in your PEARL chests. The longer you lock them up, the greater your APY. Stash enough of them for long enough, and you'll get an NFT that can be used to get bond discounts.",
        }}
        imageProps={{
          sizing: 'full',
          imageRatio: 60,
          image: ImageBank,
          alt: 'bank',
        }}
      />
      <ImageContentSection
        layout="image-left"
        buttonProps={{
          type: 'solid',
          text: 'Go to SandBox',
          href: 'https://www.sandbox.game/en/estates/624/',
        }}
        textProps={{
          sizing: 'rightPadding',
          title: 'SandBox',
          content:
            'Our metaverse adventure in the Sandbox has only just begun! Use your Otto VX to play games, explore our kingdom, or participate in special events. More features coming soon.',
        }}
        imageProps={{
          sizing: 'leftPadding',
          imageRatio: 0,
          image: ImageSandbox,
          alt: 'sandbox',
        }}
      />
    </Container>
  )
}
export default ImageContentSections
