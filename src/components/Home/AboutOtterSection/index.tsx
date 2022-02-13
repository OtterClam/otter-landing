import styled from 'styled-components'
import Image from 'next/image'
import ImageDesktopAboutOtter from './images/desktop-about_otter.webp'
import ImageMobileAboutOtter from './images/mobile-about_otter.webp'
import RoundedButton from 'src/components/common/RoundedButton'
import { Container } from 'src/components/common/Container'
import { tabletMediaQuery } from 'src/themes/mediaQuery'
import { useMediaQuery } from '@material-ui/core'
import { useTranslation } from "react-i18next"

const _Container = styled(Container)`
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: ${(props) => props.theme.colors.common.white};
  @media ${tabletMediaQuery} {
    padding: 0;
    padding-top: ${(props) => props.theme.spacings.lg};
    padding-bottom: ${(props) => props.theme.spacings.lg};
  }
`
const CenteredContent = styled.div`
  margin: auto;
  text-align: center;
  @media ${tabletMediaQuery} {
    padding: ${(props) => `0 ${props.theme.spacings.md}`};
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
  const { t } = useTranslation();
  const ImageAboutOtter = isTablet ? ImageMobileAboutOtter : ImageDesktopAboutOtter
  return (
    <_Container>
      <CenteredContent>
        <h2>{t('landing.about.title')}</h2>
        <p>{t('landing.about.description')}</p>
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
          text={t('landing.about.button')}
          href="https://otterclam.medium.com/the-otter-kingdom-a-dao-governed-land-where-nfts-make-finance-fun-68bf877227a"
        />
      </CenteredContent>
    </_Container>
  )
}
export default AboutOtterSection
