import { tabletMediaQuery } from 'src/themes/mediaQuery';
import styled from 'styled-components';
import Image from 'next/image';
import ImageGetStarted from './images/image-get_started.png';
import { Container } from 'src/components/common/Container';
import RoundedButton from 'src/components/common/RoundedButton';

const StyledContainer = styled(Container)`
  background-color: ${(props) => props.theme.colors.common.otterDark};
`;
const StyledH2 = styled.h2`
  color: ${(props) => props.theme.colors.common.white};
  text-align: center;
`;
const StyledContent = styled.h4`
  color: ${(props) => props.theme.colors.common.white};
  margin-bottom: ${(props) => props.theme.spacings.lg};
  text-align: center;
  @media ${tabletMediaQuery} {
    margin-bottom: ${(props) => props.theme.spacings.md};
  }
`;
const ColoredSection = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  color: ${(props) => props.theme.colors.common.otterDark};
  background-color: ${(props) => props.theme.colors.light.lightGray200};
  border-radius: 15px;
  padding: ${(props) =>
    `${props.theme.spacings.md} ${props.theme.spacings.lg}`};
  @media ${tabletMediaQuery} {
    flex-direction: column;
    text-align: center;
    padding: ${(props) => props.theme.spacings.md};
  }
`;
const ImageBox = styled.div`
  margin-right: 40px;
  @media ${tabletMediaQuery} {
    margin-right: 0;
  }
`;
const StyledP = styled.p`
  margin-bottom: 25px;
`;

interface IconGridProps {
  icon: any;
  text: string;
  href: string;
}

const GetStartedSection = () => {
  return (
    <StyledContainer>
      <StyledH2>How to Get Started</StyledH2>
      <StyledContent>
        So you’ve made it to OtterClam, you like what you see, and you’re ready
        to dive in. Now what? Well, you’ll need to get some CLAM to participate
        in the ecosystem. Although there are many ways for you to take advantage
        of the platform’s various features, you’ll need our native currency CLAM
        to get started.
      </StyledContent>
      <ColoredSection>
        <ImageBox>
          <Image
            src={ImageGetStarted.src}
            layout="intrinsic"
            width={200}
            height={168}
            alt="get started"
          />
        </ImageBox>
        <div>
          <StyledP>
            If you’re not sure how to buy CLAM, click the button below and Otter
            Guide will lead you:
          </StyledP>
          <RoundedButton text="Getting Started" href="/get-started" />
        </div>
      </ColoredSection>
    </StyledContainer>
  );
};
export default GetStartedSection;
