import styled from 'styled-components';
import ImageContentSection from 'src/components/common/ImageContentSection';
import ImageBank from './images/image-bank.webp';
import ImageMarket from './images/image-market.webp';
import ImageOtto from 'src/components/Otto/OttoBanner/otto_hero.webp';
import ImageSandbox from './images/image-sandbox.webp';
import { tabletMediaQuery } from 'src/themes/mediaQuery';
import { useTranslation } from 'react-i18next';

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
`;
const IntroTextSection = styled(Container)`
  color: ${(props) => props.theme.colors.common.white};
  background-color: ${(props) => props.theme.colors.common.otterDark};
  text-align: center;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const StyledH2 = styled.h2`
  font-size: 36px;
  line-height: 54px;
  padding: 0px 20px;
  @media ${tabletMediaQuery} {
    font-size: 24px;
    line-height: 36px;
  }
`;

const ImageContentSections = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <IntroTextSection>
        <StyledH2>{t('landing.bridge')}</StyledH2>
      </IntroTextSection>
      <ImageContentSection
        layout="image-right"
        buttonProps={{ text: t('landing.market.button'), type: 'disable' }}
        textProps={{
          sizing: 'leftPadding',
          title: t('landing.market.title'),
          content: t('landing.market.description'),
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
        buttonProps={{
          type: 'solid',
          text: t('landing.otto.button'),
          href: '/otto',
          target: '_self',
        }}
        textProps={{
          sizing: 'rightPadding',
          title: t('landing.otto.title'),
          content: t('landing.otto.description') }}
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
        buttonProps={{
          type: 'solid',
          text: t('landing.treasury.button'),
          href: 'https://app.otterclam.finance/#/',
        }}
        textProps={{
          sizing: 'leftPadding',
          title: t('landing.treasury.title'),
          content: t('landing.treasury.description')
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
          text: t('landing.sandBox.button'),
          href: 'https://www.sandbox.game/en/estates/624/',
        }}
        textProps={{
          sizing: 'rightPadding',
          title: t('landing.sandBox.title'),
          content: t('landing.sandBox.description') }}
        imageProps={{
          sizing: 'leftPadding',
          imageRatio: 0,
          image: ImageSandbox,
          alt: 'sandbox',
        }}
      />
    </Container>
  );
};
export default ImageContentSections;
