import { useEffect } from 'react';
import styled from 'styled-components';
import { Power0 } from 'gsap';
import { gsap } from 'src/utils/gsap';
import { useMediaQuery } from '@material-ui/core';
import { tabletMediaQuery } from 'src/themes/mediaQuery';

import ParallaxSky from './images/parallax-fixed_background.webp';
import ParallaxBackLand from './images/parallax-back_land.webp';
import ParallaxMiddleLand from './images/parallax-middle_land.webp';
import ParallaxOtters from './images/parallax-otters.webp';
import ParallaxLeft from './images/parallax-front_left.webp';
import ParallaxRight from './images/parallax-front_right.webp';
import IconArrow from './images/arrow.svg';

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const ParallaxBox = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  transition: 0.5s;
  z-index: 0;
`;

const FullMask = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  background-color: rgba(0, 0, 0, 0.1);
`;

const WhiteMask = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  transition: 0.5s;
  top: 0;
  z-index: 0;

  &::after {
    position: absolute;
    top: 100vh;
    left: 0;
    display: block;
    content: '';
    height: 16vh;
    width: 100%;
    background-color: white;
  }
  @media ${tabletMediaQuery} {
    &::after {
      top: 105vh;
      height: 11vh;
    }
  }
`;

const Content = styled.div`
  text-align: center;
  position: absolute;
  top: 260px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  @media ${tabletMediaQuery} {
    top: 180px;
  }
`;

const StyledH1 = styled.h1`
  color: ${(props) => props.theme.colors.common.white};
  text-shadow: 0px 4px 20px rgba(29, 38, 84, 0.4);
  margin-bottom: ${(props) => props.theme.spacings.md};
`;
const StyledH3 = styled.h3`
  color: ${(props) => props.theme.colors.common.white};
  margin-bottom: ${(props) => props.theme.spacings.md};
`;
const StyledArrow = styled(IconArrow)`
  animation: infinite-down 1s linear infinite both;
  @keyframes infinite-down {
    0% {
      transform: translate(-50%, 0);
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, 12px);
    }
  }
`;

const LAYER_DEPTHs = [0, 0, 0.05, 0.1, 0.13, 0.15, 0.15, 0.15];
const Banner = () => {
  const isTablet = useMediaQuery(tabletMediaQuery);
  useEffect(() => {
    const container = document.querySelector('#trigger') as HTMLDivElement;
    const layerHeight = container?.offsetHeight;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#trigger',
        start: 'top',
        end: 'center',
        scrub: true,
      },
    });

    gsap.utils
      .toArray<HTMLDivElement>('.parallax')
      .forEach((layer: HTMLDivElement, index: number) => {
        const movement = -(layerHeight * LAYER_DEPTHs[index]);
        tl.to(layer, { y: movement, ease: 'none' }, 0).to('.arrow', {
          delay: 0.01,
          repeat: 4,
          yoyo: true,
          ease: Power0.easeOut,
          duration: 0.1,
        });
      });
  }, []);
  return (
    <Container id="trigger">
      <Content className="parallax">
        <StyledH1>
          Welcome to
          <br />
          Otter Kingdom
        </StyledH1>
        <StyledH3>A DAO-governed Land Where NFTs Make Finance Fun</StyledH3>
        <StyledArrow className="arrow" />
      </Content>
      <ParallaxBox
        className="parallax"
        style={{
          background: `url(${ParallaxSky.src}) top/cover no-repeat`,
        }}
      />
      <ParallaxBox
        className="parallax"
        style={{
          background: `url(${ParallaxBackLand.src}) top/cover no-repeat`,
        }}
      />
      <ParallaxBox
        className="parallax"
        style={{
          background: `url(${ParallaxMiddleLand.src}) top/cover no-repeat`,
        }}
      />
      <ParallaxBox
        className="parallax"
        style={{
          background: `url(${ParallaxOtters.src}) top/cover no-repeat`,
        }}
      />
      {!isTablet && (
        <>
          <ParallaxBox
            className="parallax"
            style={{
              background: `url(${ParallaxRight.src}) top/cover no-repeat`,
            }}
          />
          <ParallaxBox
            className="parallax"
            style={{
              background: `url(${ParallaxLeft.src}) top/cover no-repeat`,
            }}
          />
        </>
      )}
            <FullMask />
      <WhiteMask className="parallax" />
    </Container>
  );
};
export default Banner;
