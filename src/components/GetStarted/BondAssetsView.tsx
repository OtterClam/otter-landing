import Image from 'next/image';
import ImageBondAssetsFlow from './images/image-bond_assets_flow.png';
import ImageBond2sClam from './images/image-bond2sclam.png';
import RoundedButton from '../common/RoundedButton';
import {
  Container,
  SubContainer,
  Divider,
  ImageContainer,
  ButtonGridBox,
} from './common';

const BondAssetsView = () => {
  return (
    <Container>
      <h2>Bond Assets</h2>
      <SubContainer>
        <p>You can claim some of the rewards (CLAM tokens) as you vest, and at the end of the vesting term, the full amount will be claimable.</p>
        <ImageContainer>
          <Image
            src={ImageBondAssetsFlow.src}
            width={374}
            height={104}
            layout="intrinsic"
            alt="lock pearls flow"
          />
        </ImageContainer>
      </SubContainer>
      <SubContainer>
        <p>
        sCLAM will be collected as rewards. You can unstake the sCLAM to get CLAM, or wrap your sCLAM to get PEARL.
              </p>
              <ImageContainer>
          <Image
            src={ImageBond2sClam.src}
            width={194}
            height={74}
            layout="intrinsic"
            alt="bond to sClam"
          />
        </ImageContainer>
      </SubContainer>
      <ButtonGridBox>
        <RoundedButton href="/FAKE/bond-assets" text="Bond Assets Now" />
        <RoundedButton
          type="outline"
          href="/FAKE/mechanics"
          text="Read Full Mechanics"
        />
      </ButtonGridBox>
    </Container>
  );
};
export default BondAssetsView;
