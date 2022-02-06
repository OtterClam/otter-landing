import Image from 'next/image';
import ImageHoldPearlsFlow from './images/image-hold_pearls_flow.png';
import ImageClam2Pearl from './images/image-clam2pearl.png';
import ImageWrapSnapshot from './images/image-wrap_snapshot.png';
import RoundedButton from '../common/RoundedButton';
import {
  Container,
  SubContainer,
  Divider,
  ImageContainer,
  ButtonGridBox,
} from './common';

const HoldPearlsView = () => {
  return (
    <Container>
      <h2>Hold PEARLs</h2>
      <SubContainer>
        <p>
          PEARL is an index-adjusted wrapper for sCLAM. Some people may find
          this useful for cross-blockchain purposes. Unlike your sCLAM balance,
          your PEARL balance will not increase over time. When PEARL is
          unwrapped, you receive sCLAM based on the latest (ever-increasing)
          index, so the total yield is the same.
        </p>
        <ImageContainer>
          <Image
            src={ImageHoldPearlsFlow.src}
            width={374}
            height={104}
            layout="intrinsic"
            alt="hold pearls flow"
          />
        </ImageContainer>
      </SubContainer>
      <SubContainer>
        <p>
          PEARL can only be made from sCLAM, which is the rewards from staking
          CLAMs. The more CLAMs you are staking, the more sCLAM you will get.
        </p>
        <ImageContainer>
          <Image
            src={ImageClam2Pearl.src}
            width={270}
            height={74}
            layout="intrinsic"
            alt="Clam to sClam"
          />
        </ImageContainer>
      </SubContainer>
      <Divider />
      <h3>How to Hold PEARLs</h3>
      <SubContainer>
        <ol>
          <li>
            Go to{' '}
            <a
              href="https://app.otterclam.finance/#/wrap"
              target="_blank"
              rel="noreferrer"
            >
              Wrap Page
            </a>
          </li>
          <li>
            Make sure you are connected with the correct wallet. You can check
            your address on the left top, and reconnect/disconnect the wallet by
            clicking the top right button on the header.
          </li>
          <li>
            In the “Wrap” tab, enter your amount of sCLAMs. Approve and wrap
            your sCLAMS to het PEARLs. Done!
          </li>
        </ol>
        <ImageContainer>
          <Image
            src={ImageWrapSnapshot.src}
            width={ImageWrapSnapshot.width}
            height={ImageWrapSnapshot.height}
            layout="responsive"
            alt="Clam to sClam"
          />
        </ImageContainer>
      </SubContainer>
      <ButtonGridBox>
        <RoundedButton href="https://app.otterclam.finance/#/wrap" text="Wrap PEARLs Now" />
        <RoundedButton
          type="outline"
          href="https://docs.otterclam.finance/basics/pearl"
          text="Read Full Mechanics"
        />
      </ButtonGridBox>
    </Container>
  );
};
export default HoldPearlsView;
