import styled from 'styled-components';
import TwitterIcon from 'public/icons/twitter.svg';
import DiscordIcon from 'public/icons/discord.svg';
import GithubIcon from 'public/icons/github.svg';
import TelegramIcon from 'public/icons/telegram.svg';
import DocIcon from 'public/icons/doc.svg';
import MediumIcon from 'public/icons/medium.svg';

export const SOCIAL_LINKS = {
  discord: 'https://discord.gg/otterclam',
  twitter: 'https://twitter.com/otterclam',
  docs: 'https://docs.otterclam.finance',
  github: 'https://github.com/OtterClam',
  medium: 'https://otterclam.medium.com/',
  telegram: 'https://t.me/otterclam_official',
};

export const StyledDiscordIcon = styled(DiscordIcon)<{
  $color?: string;
}>`
  fill: ${(props) =>
    props.$color ? props.$color : props.theme.colors.common.otterBlue};
`;
export const StyledTwitterIcon = styled(TwitterIcon)<{
  $color?: string;
}>`
  fill: ${(props) =>
    props.$color ? props.$color : props.theme.colors.common.otterBlue};
`;
export const StyledGithubIcon = styled(GithubIcon)<{
  $color?: string;
}>`
  fill: ${(props) =>
    props.$color ? props.$color : props.theme.colors.common.otterBlue};
`;
export const StyledTelegramIcon = styled(TelegramIcon)<{
  $color?: string;
}>`
  fill: ${(props) =>
    props.$color ? props.$color : props.theme.colors.common.otterBlue};
`;
export const StyledDocIcon = styled(DocIcon)<{
  $color?: string;
}>`
  fill: ${(props) =>
    props.$color ? props.$color : props.theme.colors.common.otterBlue};
`;
export const StyledMediumIcon = styled(MediumIcon)<{
  $color?: string;
}>`
  fill: ${(props) =>
    props.$color ? props.$color : props.theme.colors.common.otterBlue};
`;
