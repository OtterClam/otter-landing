import { Dispatch, SetStateAction, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { LandingPageLink } from 'src/constants';
import { LinkMetadata } from './type';
import Link from "next/link";
import NewChip from 'src/common/NewChip';
import LanguagePicker from 'src/common/LanguagePicker';
import Logo from './Logo';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.mode.white,
    borderBottom: `1px solid ${theme.palette.mode.lightGray400}`,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
  },
  patch: {
    width: '24px',
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
  },
  menuContent: {
    display: 'grid',
    gridRowGap: '20px',
  },
  menuLink: {
    fontSize: '16px',
    fontWeight: 700,
    textAlign: 'center',
    color: theme.palette.mode.otterDark,
  },
  menuButton: {
    position: 'fixed',
    top: '24px',
    width: '24px',
    height: '18px',
    cursor: 'pointer',
    zIndex: 1,
  },
  menuLine: {
    width: '18px',
    height: '2px',
    margin: '3px',
    backgroundColor: 'black',
    transition: '0.3s',
  },
  menuTopLineOpen: {
    transform: 'rotate(45deg) translateY(7.25px)',
  },
  menuMiddleLineOpen: {
    opacity: 0,
  },
  menuBottomLineOpen: {
    transform: 'rotate(-45deg) translateY(-7.25px)',
  },
}));

interface MenuButtonProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuButton = ({ menuOpen, setMenuOpen }: MenuButtonProps) => {
  const toggleMenu = () => setMenuOpen((prevValue) => !prevValue);
  const classes = useStyles();
  return (
    <div className={classes.menuButton} onClick={toggleMenu}>
      <div
        className={`${classes.menuLine} ${menuOpen && classes.menuTopLineOpen}`}
      ></div>
      <div
        className={`${classes.menuLine} ${
          menuOpen && classes.menuMiddleLineOpen
        }`}
      ></div>
      <div
        className={`${classes.menuLine} ${
          menuOpen && classes.menuBottomLineOpen
        }`}
      ></div>
    </div>
  );
};

interface Props {
  linkMetadata: LinkMetadata[];
}

const OttoTabletHeader = ({ linkMetadata }: Props) => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.patch} />
        <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Link href='/'>
          <a className="otto-header-logo">
            <Logo />
          </a>
        </Link>
        <LanguagePicker border={false} />
      </div>
      {menuOpen && (
        <div className={classes.menu}>
          <div className={classes.menuContent}>
            <div>
              <a
                href={LandingPageLink}
                className="otto-header-tablet__menu-link otto-header-logo"
              >
                <Logo />
              </a>
            </div>
            {linkMetadata.map((metadata) => (
              <a
                key={metadata.text}
                className={classes.menuLink}
                href={metadata.href}
                target={metadata.external ? "__blank" : "_self"}
              >
                {metadata.text}
                {metadata.new && <NewChip marginLeft="4px" />}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
export default OttoTabletHeader;
