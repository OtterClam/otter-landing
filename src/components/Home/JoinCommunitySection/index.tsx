import styled from 'styled-components';
import IconGridsSection from 'src/components/common/IconGridsSection';
import { tabletMediaQuery } from 'src/themes/mediaQuery';
import {
  StyledTwitterIcon,
  StyledDocIcon,
  StyledMediumIcon,
  StyledDiscordIcon,
  StyledGithubIcon,
  StyledTelegramIcon,
  SOCIAL_LINKS,
} from 'src/components/common/SocialIcons';

const Container = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.common.white};
  padding-bottom: 30px;
  @media (max-width: 1280px) {
    padding-bottom: 0;
  }
  @media ${tabletMediaQuery} {
    padding-bottom: 30px;
  }
`;

const LinkGrid = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.common.otterDark};
  background-color: ${(props) => props.theme.colors.light.lightGray100};
  padding: ${(props) => props.theme.spacings.lg};
  border-radius: 20px;
  transition: 0.25s;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  }
`;
const ImageContainer = styled.div`
  margin-bottom: ${(props) => props.theme.spacings.md};
`;

interface IconGridProps {
  Icon: any;
  text: string;
  href: string;
}
const IconGrid = ({ href, Icon, text }: IconGridProps) => {
  return (
    <LinkGrid href={href} target="_blank">
      <ImageContainer>{Icon}</ImageContainer>
      <p>{text}</p>
    </LinkGrid>
  );
};

const COMMUNITY_GRID_METADATAs = [
  {
    icon: <StyledTwitterIcon />,
    text: 'Twitter',
    href: SOCIAL_LINKS['twitter'],
  },
  {
    icon: <StyledDiscordIcon />,
    text: 'Discord',
    href: SOCIAL_LINKS['discord'],
  },
  {
    icon: <StyledTelegramIcon />,
    text: 'Telegram',
    href: SOCIAL_LINKS['telegram'],
  },
  {
    icon: <StyledMediumIcon />,
    text: 'Medium',
    href: SOCIAL_LINKS['medium'],
  },
  { icon: <StyledGithubIcon />, text: 'Github', href: SOCIAL_LINKS['github'] },
  {
    icon: <StyledDocIcon />,
    text: 'Doc',
    href: SOCIAL_LINKS['docs'],
  },
];

const JoinCommunitySection = () => {
  return (
    <Container>
      <IconGridsSection
        title="Join Our Community"
        content="Let’s make it (🦦,🦦)"
        theme="light"
        grids={COMMUNITY_GRID_METADATAs.map((metadata) => (
          <IconGrid
            key={metadata.text}
            Icon={metadata.icon}
            text={metadata.text}
            href={metadata.href}
          />
        ))}
      />
    </Container>
  );
};
export default JoinCommunitySection;
