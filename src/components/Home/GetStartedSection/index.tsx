import Image from 'next/image';
import styled from 'styled-components';
import IconGridsSection from 'src/components/common/IconGridsSection';

import IconCLAM from './images/icon_token_CLAM.png';
import IconsCLAM from './images/icon_token_sCLAM.png'; 
import IconPEARL from './images/icon_token_PEARL.png';
import IconTreasury from './images/icon_treasury.png';
import IconAssets from './images/icon_assets.png';

const LinkGrid = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.common.white};
  padding: 30px;
  border-radius: 20px;
  transition: 0.25s;
  &:hover {
    transform: translateY(-4px);
    background-color: ${(props) => props.theme.colors.light.lightGray200};
  }
`;
const ImageContainer = styled.div`
  margin-bottom: ${(props) => props.theme.spacings.md};
`;

interface IconGridProps {
  icon: any;
  text: string;
  href: string;
}
const IconGrid = ({ icon, text, href }: IconGridProps) => {
  return (
    <LinkGrid href={href} target='_blank'>
      <ImageContainer>
        <Image
          src={icon.src}
          width="100px"
          height="100px"
          objectFit="contain"
          alt={text}
        />
      </ImageContainer>
      <p>{text}</p>
    </LinkGrid>
  );
};

const WAY_GRID_METADATAs = [
  { icon: IconCLAM, text: 'Buy CLAMs', href: '/get-started/buy-clams'},
  { icon: IconsCLAM, text: 'Stake CLAMs', href: '/get-started/stake-clams' },
  { icon: IconPEARL, text: 'Hold PEARLs', href: '/get-started/hold-pearls' },
  { icon: IconTreasury, text: 'Lock PEARLs', href: '/get-started/lock-pearls' },
  { icon: IconAssets, text: 'Bond Assets', href: '/get-started/bond-assets' },
];

const GetStartedSection = () => {
  return (
      <IconGridsSection
        title="How to Get Started"
        content="There are 4 simple ways to earn in the Otter Kingdom."
        theme="dark"
        grids={WAY_GRID_METADATAs.map((metadata) => (
          <IconGrid
            key={metadata.text}
            icon={metadata.icon}
            text={metadata.text}
            href={metadata.href}
          />
        ))}
      />
  );
};
export default GetStartedSection;
