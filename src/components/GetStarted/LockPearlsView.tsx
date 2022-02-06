import styled from "styled-components";
import Image from 'next/image';
import ImageLockPearlsFlow from './images/image-lock_pearls_flow.png';
import ImagePearl2PChest from './images/image-pearl2chest.png';
import ImageNoteSafe from './images/image-note_safe.png';
import ImageNoteFurry from './images/image-note_furry.png';
import ImageNoteStone from './images/image-note_stone.png';
import ImageNoteDiamond from './images/image-note_diamond.png';
import ImageChestSafe from './images/image-safe_chest.png';
import ImageChestFurry from './images/image-furry_chest.png';
import ImageChestStone from './images/image-stone_chest.png';
import ImageChestDiamond from './images/image-diamond_chest.png';
import NoteInfoCard from './NoteInfoCard';
import RoundedButton from '../common/RoundedButton';
import {
  Container,
  SubContainer,
  Divider,
  ImageContainer,
  ButtonGridBox,
} from './common';
import { laptopMediaQuery, tabletMediaQuery, mobileMediaQuery } from "src/themes/mediaQuery";

const NoteGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 15px;
  @media ${laptopMediaQuery} {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 15px;
  }
  @media ${tabletMediaQuery} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${mobileMediaQuery} {
    grid-template-columns: auto;
  }
`;

export interface NoteMetadata {
  name: string;
  image: StaticImageData;
  chestImage: StaticImageData;
  expireDay: number;
  boost: number;
  discount: number;
}

const NOTE_METADATAs: NoteMetadata[] = [
  {
    name: 'Safe Hand Pearl Note',
    image: ImageNoteSafe,
    chestImage: ImageChestSafe,
    expireDay: 14,
    boost: 1,
    discount: 0,
  },
  {
    name: 'Furry Hand Pearl Note',
    image: ImageNoteFurry,
    chestImage: ImageChestFurry,
    expireDay: 28,
    boost: 1.1,
    discount: 0.5,
  },
  {
    name: 'Stone Hand Pearl Note',
    image: ImageNoteStone,
    chestImage: ImageChestStone,
    expireDay: 90,
    boost: 1.35,
    discount: 1,
  },
  {
    name: 'Diamond Hand Pearl Note',
    image: ImageNoteDiamond,
    chestImage: ImageChestDiamond,
    expireDay: 180,
    boost: 1.5,
    discount: 2,
  },
];

const LockPearlsView = () => {
  return (
    <Container>
      <h2>Lock PEARLs</h2>
      <SubContainer>
        <ul>
          <li>Earn Otter Lake-exclusive high APYs.</li>
          <li>Earn Otter Pond regular rewards too!</li>
          <li>Boost rewards with longer timelocks.</li>
          <li>Claim PEARL rewards anytime. </li>
          <li>Relock rewards with timelock reset.</li>
          <li>
            Lock at least 50 PEARLs for 28 days or more to get NFTs with special
            bond discounts.
          </li>
        </ul>
        <ImageContainer>
          <Image
            src={ImageLockPearlsFlow.src}
            width={374}
            height={104}
            layout="intrinsic"
            alt="lock pearls flow"
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
            src={ImagePearl2PChest.src}
            width={182}
            height={74}
            layout="intrinsic"
            alt="pearl to pearl chest"
          />
        </ImageContainer>
      </SubContainer>
      <Divider />
      <h3>Exclusive Pearl Note NFTs for PEARL Chests</h3>
      <NoteGridBox>
        {NOTE_METADATAs.map((metadata) => (
          <NoteInfoCard key={metadata.name} metadata={metadata} />
        ))}
      </NoteGridBox>
      <ButtonGridBox>
        <RoundedButton href="https://app.otterclam.finance/#/pearl-chests?tab=lockup" text="Lock PEARLs Now" />
        <RoundedButton
          type="outline"
          href="https://otterclam.medium.com/introducing-pearl-chests-and-pearl-notes-70a61748963f"
          text="Read Full Mechanics"
        />
      </ButtonGridBox>
    </Container>
  );
};
export default LockPearlsView;
