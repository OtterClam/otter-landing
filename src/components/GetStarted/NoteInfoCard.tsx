import styled from 'styled-components';
import Image from 'next/image';
import { NoteMetadata } from './LockPearlsView';

const Container = styled.div`
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: row;
  grid-row-gap: ${(props) => props.theme.spacings.sm};
`;

const InfoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: ${(props) => props.theme.spacings.sm};
  background-color: ${(props) => props.theme.colors.light.lightGray200};
  padding: ${(props) => props.theme.spacings.sm};
  border-radius: 8px;
`;
const InfosArea = styled.div`
  display: grid;
  grid-row-gap: 2px;
`;

const CenteredH4 = styled.h4`
  text-align: center;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Description = styled.p`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.15rem;
`;

interface Props {
  metadata: NoteMetadata;
}

const NoteInfoCard = ({ metadata }: Props) => {
  return (
    <Container>
      <CenteredH4>{metadata.name}</CenteredH4>
      <Image
        src={metadata.image.src}
        width={metadata.image.width}
        height={metadata.image.height}
        objectFit="contain"
        alt={metadata.name}
      />
      <InfosArea>
        <InfoBox>
          <Image
            src={metadata.chestImage.src}
            width="50px"
            height="36px"
            layout="intrinsic"
            objectFit="contain"
            alt={`${metadata.name} chest`}
          />
          <DescriptionBox>
            <h4>{metadata.expireDay} DAY</h4>
            <Description>TIME LOCK</Description>
          </DescriptionBox>
        </InfoBox>
        <InfoBox>
          <CenteredH4>{metadata.boost}</CenteredH4>
          <DescriptionBox>
            <Description>REWARD BOOST</Description>
          </DescriptionBox>
              </InfoBox>
              <InfoBox>
          <CenteredH4>{metadata.discount}%</CenteredH4>
          <DescriptionBox>
            <Description>BOND DISCOUNT</Description>
          </DescriptionBox>
        </InfoBox>
      </InfosArea>
    </Container>
  );
};
export default NoteInfoCard;
