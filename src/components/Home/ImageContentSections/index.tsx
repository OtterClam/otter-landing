import styled from 'styled-components';
import ImageContentSection from 'src/components/common/ImageContentSection';
import ImageBank from './images/image-bank.png';
import ImageMarket from './images/image-market.png';
import ImageOtto from 'src/components/Otto/OttoBanner/otto_hero.png';

const Container = styled.div`
  .image-content {
    &:nth-child(even) {
      background-color: ${(props) => props.theme.colors.common.white};
    }
    &:nth-child(odd) {
      background-color: ${(props) => props.theme.colors.light.lightGray100};
    }
  }
`;

const ImageContentSections = () => {
  return (
    <Container>
      <ImageContentSection
        layout="image-right"
        buttonProps={{ text: 'Coming Soon', type: 'disable' }}
        textProps={{
          sizing: 'leftPadding',
          title: 'PAW Market',
          content:
            'Our market will be open and permissionless, so you can bring over your personal portfolio, or add to your collection from our own, in-house created NFT selection.',
        }}
        imageProps={{
          sizing: 'full',
          imageRatio: 100,
          src: ImageMarket.src,
          alt: 'market',
        }}
      />
      <ImageContentSection
        layout="image-left"
        buttonProps={{ type: 'solid', text: 'Go to Otto', href: '/otto' }}
        textProps={{
          sizing: 'rightPadding',
          title: 'Otto NFTs',
          content:
            'Ottos are unique and randomly generated 2D NFT Social Avatars created to enhance your online experience. Buy them at the Market using $CLAM, breed them to raise your own Otter family, use them in the Otter Kingdom, or give one to your friends.',
        }}
        imageProps={{
          sizing: 'full',
          imageRatio: 87.5,
          src: ImageOtto.src,
          alt: 'otto',
        }}
      />
      <ImageContentSection
        layout="image-right"
        buttonProps={{ type: 'solid', text: 'Go to Bank', href: '/bank' }}
        textProps={{
          sizing: 'leftPadding',
          title: 'OtterClam Bank',
          content:
            'ERC-721 tokens are non-fungible, meaning that every part in your Otto has its unique value and is to be treated individually. Unlike ERC-20, every single ERC-20 token is equal in value and is identical and inter replaceable.',
        }}
        imageProps={{
          sizing: 'full',
          imageRatio: 60,
          src: ImageBank.src,
          alt: 'bank',
        }}
      />
      <ImageContentSection
        layout="image-left"
        buttonProps={{
          type: 'solid',
          text: 'Go to SandBox',
          href: '/sand-box',
        }}
        textProps={{
          sizing: 'rightPadding',
          title: 'SandBox',
          content:
            'Our metaverse adventure in the Sandbox has only just begun! Use your Otto VX to play games, explore our kingdom, or participate in special events. More features coming soon.',
        }}
        imageProps={{
          sizing: 'full',
          imageRatio: 87.5,
          src: ImageOtto.src,
          alt: 'otto',
        }}
      />
    </Container>
  );
};
export default ImageContentSections;
