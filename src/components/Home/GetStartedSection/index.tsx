import { tabletMediaQuery } from 'src/themes/mediaQuery'
import styled from 'styled-components'
import Image from 'next/image'
import ImageGetStarted from './images/image-get_started.webp'
import { Container } from 'src/components/common/Container'
import RoundedButton from 'src/components/common/RoundedButton'
import { useTranslation } from "react-i18next"

const StyledContainer = styled(Container)`
  background-color: ${(props) => props.theme.colors.common.otterDark};
`
const StyledH2 = styled.h2`
  color: ${(props) => props.theme.colors.common.white};
  font-size: 60px;
  line-height: 90px;
  text-align: center;
  @media ${tabletMediaQuery} {
    font-size: 48px;
    line-height: 72px;
    margin-bottom: ${(props) => props.theme.spacings.sm};
  }
`
const StyledContent = styled.h4`
  color: ${(props) => props.theme.colors.common.white};
  margin-bottom: ${(props) => props.theme.spacings.lg};
  text-align: center;
  @media ${tabletMediaQuery} {
    margin-bottom: ${(props) => props.theme.spacings.md};
  }
`
const ColoredSection = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  color: ${(props) => props.theme.colors.common.otterDark};
  background-color: ${(props) => props.theme.colors.light.lightGray200};
  border-radius: 15px;
  padding: ${(props) => `${props.theme.spacings.md} ${props.theme.spacings.lg}`};
  @media ${tabletMediaQuery} {
    flex-direction: column;
    text-align: center;
    padding: ${(props) => props.theme.spacings.md};
  }
`
const ImageBox = styled.div`
  margin-right: 40px;
  @media ${tabletMediaQuery} {
    margin-right: 0;
  }
`
const StyledP = styled.p`
  margin-bottom: 25px;
`

interface IconGridProps {
  icon: any
  text: string
  href: string
}

const GetStartedSection = () => {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledH2>{t('landing.getStarted.title')}</StyledH2>
      <StyledContent>{t('landing.getStarted.description')}</StyledContent>
      <ColoredSection>
        <ImageBox>
          <Image
            src={ImageGetStarted}
            layout="intrinsic"
            width={200}
            height={168}
            alt="get started"
          />
        </ImageBox>
        <div>
          <StyledP>{t('landing.getStarted.instruction')}</StyledP>
          <RoundedButton text={t('landing.getStarted.button')} href="/get-started" target="_self" />
        </div>
      </ColoredSection>
    </StyledContainer>
  )
}
export default GetStartedSection
