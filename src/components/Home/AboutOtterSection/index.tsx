import styled from 'styled-components';
import Image from 'next/image';
import ImageDesktopAboutOtter from './images/desktop-about_otter.png';
import ImageMobileAboutOtter from './images/mobile-about_otter.png';
import { Container } from 'src/components/common/Container';
import { tabletMediaQuery } from 'src/themes/mediaQuery';
import { useMediaQuery } from '@material-ui/core';

const _Container = styled(Container)`
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: ${(props) => props.theme.colors.common.white};
  @media ${tabletMediaQuery} {
    padding-bottom: 11vh;
    padding: 0 0 11vh 0;
  }
`;
const Content = styled.div`
  margin: auto;
  text-align: center;
  @media ${tabletMediaQuery} {
    padding: ${(props) =>
      `0 ${props.theme.spacings.md} ${props.theme.spacings.lg} ${props.theme.spacings.md}`};
  }
`;
const ImageContainer = styled.div<{ $isTablet: boolean }>`
  position: relative;
  padding-bottom: ${(props) => (props.$isTablet ? '223%' : '100%')};
`;

const AboutOtterSection = () => {
  const isTablet = useMediaQuery(tabletMediaQuery);
  const ImageAboutOtter = isTablet
    ? ImageMobileAboutOtter
    : ImageDesktopAboutOtter;
  return (
    <_Container>
      <Content>
        <h2>About Otter Kingdom</h2>
        <p>
          We are passionate about decentralization, and we believe that in an
          industry where practically everything can be replicated, our community
          culture and the art that gave it life, are what ultimately sets us
          apart.
        </p>
      </Content>
      <ImageContainer $isTablet={isTablet}>
        <Image
          src={ImageAboutOtter.src}
          layout="fill"
          objectFit={isTablet ? 'cover' : 'contain'}
          alt="about otter kingdom"
        />
      </ImageContainer>
    </_Container>
  );
};
export default AboutOtterSection;
