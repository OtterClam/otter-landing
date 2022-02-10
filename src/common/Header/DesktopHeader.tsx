import { makeStyles } from '@material-ui/core';
import { LandingPageLink } from 'src/constants';
import { LinkMetadata } from './type';
import Link from "next/link";
import NewChip from 'src/common/NewChip';
import LanguagePicker from 'src/common/LanguagePicker';
import Logo from './Logo';
import { light } from 'src/themes';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: light.palette.mode.white,
    borderBottom: `1px solid ${light.palette.mode.lightGray400}`,
    position: 'fixed',
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
    padding: '10px 0',
  },
  container: {
    width: '100%',
    padding: '0 245px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  sectionLeft: {
    flex: 1,
    alignItems: 'center',
  },
  sectionRight: {
    flex: 1,
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    marginLeft: '40px',
    whiteSpace: 'nowrap',
    color: theme.palette.mode.otterDark,
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '24px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  langPicker: {
    marginLeft: '20px',
    color: theme.palette.mode.otterDark
  }
}));

interface Props {
  linkMetadata: LinkMetadata[];
}

export default function OttoDesktopHeader({ linkMetadata }: Props) {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.sectionLeft}>
          <Link href='/' passHref>
          <a className={classes.logo}>
            <Logo />
          </a>
          </Link>
        </div>
        <div className={classes.sectionRight}>
          {linkMetadata.map((metadata, i) => (
            <a
              key={i}
              className={classes.link}
              href={metadata.href}
              target="__blank"
            >
              {metadata.text} {metadata.new && <NewChip marginLeft="10px" />}
            </a>
          ))}
          <div className={classes.langPicker}>
            <LanguagePicker border={false} />
          </div>
        </div>
      </div>
    </header>
  );
}
