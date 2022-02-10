import styled from 'styled-components'
import Image from 'next/image'
import ImageDesktopAboutOtter from './images/desktop-about_otter.webp'
import ImageMobileAboutOtter from './images/mobile-about_otter.webp'
import RoundedButton from 'src/components/common/RoundedButton'
import { Container } from 'src/components/common/Container'
import { tabletMediaQuery } from 'src/themes/mediaQuery'
import { useMediaQuery } from '@material-ui/core'

const _Container = styled(Container)`
  padding-top: 0px;
  padding-bottom: 80px;
  background-color: ${(props) => props.theme.colors.common.white};
  @media ${tabletMediaQuery} {
    padding-bottom: 11vh;
    padding: 0;
  }
`
const CenteredContent = styled.div`
  margin: auto;
  text-align: center;
  @media ${tabletMediaQuery} {
    padding: ${(props) => `0 ${props.theme.spacings.md} ${props.theme.spacings.lg} ${props.theme.spacings.md}`};
  }
`
const ImageContainer = styled.div<{ $isTablet: boolean }>`
  position: relative;
  padding-bottom: ${(props) => (props.$isTablet ? '150%' : '50%')};
  margin: ${(props) => props.theme.spacings.lg} 0;
  @media ${tabletMediaQuery} {
    margin: ${(props) => props.theme.spacings.md} 0;
  }
`

const AboutOtterSection = () => {
  const isTablet = useMediaQuery(tabletMediaQuery)
  const ImageAboutOtter = isTablet ? ImageMobileAboutOtter : ImageDesktopAboutOtter
  return (
    <_Container>
      <CenteredContent>
        <h2>About Otter Kingdom</h2>
        <p>
          We are passionate about decentralization, and we believe that in an industry where practically everything can
          be replicated, our community culture and the art that gave it life, are what ultimately sets us apart.
        </p>
      </CenteredContent>
      <ImageContainer $isTablet={isTablet}>
        <Image
          src={ImageAboutOtter}
          layout="fill"
          objectFit={isTablet ? 'cover' : 'contain'}
          alt="about otter kingdom"
          placeholder="blur"
          priority
        />
      </ImageContainer>
      <CenteredContent>
        <RoundedButton
          text="See how the ecosystem works"
          href="https://otterclam.medium.com/the-otter-kingdom-a-dao-governed-land-where-nfts-make-finance-fun-68bf877227a"
        />
      </CenteredContent>
    </_Container>
  )
}
export default AboutOtterSection
