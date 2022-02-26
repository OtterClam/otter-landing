import styled from 'styled-components';
import Image from 'next/image';
import { useMemo } from "react";
import { useMediaQuery } from '@material-ui/core';
import { tabletMediaQuery } from 'src/themes/mediaQuery';
import LoadingAnimation1 from './images/loading_animation1.gif';
import LoadingAnimation2 from './images/loading_animation2.gif';

const Container = styled.div<{ $show: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.light.lightGray100};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  opacity: ${(props) => (props.$show ? 1 : 0)};
  pointer-events: ${(props) => (props.$show ? 'auto' : 'none')};
  transition: all 0.6s ease-out;
`;

const ImageWrapper = styled.div<{ $show: boolean }>`
  transition: all 0.3s ease-out;
`;

interface Props {
  show: boolean;
}

const LoadingScreen = ({ show }: Props) => {
  const animation = useMemo<StaticImageData>(() => {
    const LoadingScreen = Math.floor(Math.random() * 2);
    if (LoadingScreen === 1) return LoadingAnimation1;
    return LoadingAnimation2;
  }, []);

  const isTablet = useMediaQuery(tabletMediaQuery);
  const animationSize = (() => {
    if (isTablet) return 200;
    return 400;
  })();
  return (
    <Container $show={show}>
      <ImageWrapper $show={show}>
        <Image
          src={animation.src}
          width={animationSize}
          height={animationSize}
          alt="loading animation"
          loading="eager"
        />
      </ImageWrapper>
    </Container>
  );
};
export default LoadingScreen;
