import Image from 'next/image';
import ImageStakeClamFlow from './images/image-stake_clam_flow.png';
import ImageClam2SClam from './images/image-clam2sclam.png';
import ImageStakeSnapshot from './images/image-stake_snapshot.png';
import RoundedButton from '../common/RoundedButton';
import {
  Container,
  SubContainer,
  Divider,
  ImageContainer,
  HintText,
  ButtonGridBox,
} from './common';

const StakeClamsView = () => {
  return (
    <Container>
      <h2>stake CLAMs!</h2>
      <SubContainer>
        <p>Trade your crypto-assets for discounted CLAMs.</p>
        <ImageContainer>
          <Image
            src={ImageStakeClamFlow.src}
            width={388}
            height={104}
            layout="intrinsic"
            alt="stake clams flow"
          />
        </ImageContainer>
      </SubContainer>
      <SubContainer>
        <p>
          You will get sCLAM rewards by staking the CLAMs. With sCLAM, you can
          use them in other features in Otter Kingdom, such as wrapping as
          PEARLs for PEARL Chests.
        </p>
        <ImageContainer>
          <Image
            src={ImageClam2SClam.src}
            width={164}
            height={74}
            layout="intrinsic"
            alt="Clam to sClam"
          />
        </ImageContainer>
      </SubContainer>
      <Divider />
      <h3>How to Stake CLAMs</h3>
      <SubContainer>
        <ol>
          <li>
            Go to{' '}
            <a
              href="https://app.otterclam.finance/#/stake"
              target="_blank"
              rel="noreferrer"
            >
              Stake Page
            </a>
          </li>
          <li>
            Make sure you are connected with the correct wallet. You can check
            your address on the left top, and reconnect/disconnect the wallet by
            clicking the top right button on the header.
          </li>
          <li>
            In the “Stake” tab, enter your amount of CLAMs. Approve and stake
            CLAMs. Done!
          </li>
        </ol>
        <ImageContainer>
          <Image
            src={ImageStakeSnapshot.src}
            width={ImageStakeSnapshot.width}
            height={ImageStakeSnapshot.height}
            layout="responsive"
            alt="Clam to sClam"
          />
        </ImageContainer>
        <HintText>
          Note: Your fresh stake CLAM will be in warmup for 2 epoch. CLAM in
          warmup still earn rebase rewards but you can’t unstake it. After 2
          epoch, you can claim your warmup and get sCLAM in your wallet.
        </HintText>
      </SubContainer>
      <ButtonGridBox>
        <RoundedButton href="https://app.otterclam.finance/#/stake" text="Stake CLAMs Now" />
        <RoundedButton
          type="outline"
          href="https://docs.otterclam.finance/basics/staking"
          text="Read Full Mechanics"
        />
      </ButtonGridBox>
    </Container>
  );
};
export default StakeClamsView;
