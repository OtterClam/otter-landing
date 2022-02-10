import { useTranslation } from 'react-i18next';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import RoundedButton from '../../common/RoundedButton';
import WhiteListRightBg from './background-otto_whitelist_right.png';
import WhiteListLeftBg from './background-otto_whitelist_left.png';
import WhiteListTopBg from './background-otto_whitelist_top.png';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    },
  },
  content: {
    backgroundColor: theme.palette.mode.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    textAlign: 'center',
    position: 'relative',
    padding: '120px',
    [theme.breakpoints.down('md')]: {
      padding: '10px 40px 40px 40px'
    },
  },
  image: {
    position: 'relative',
    width: '30%'
  },
  tabletImage: {
    position: 'relative',
    width: '100%',
    paddingBottom: '60%'
  },
  body2: {
    fontSize: '20px',
    fontWeight: 700,
    marginBottom: '25px',
  },
  h2: {
    fontSize: '100px',
    fontWeight: 800,
    lineHeight: '90px',
  },
  h3: {
    fontSize: '64px',
    fontWeight: 800,
    marginBottom: '20px',
  },
  h5: {
    fontSize: '36px',
    fontWeight: 800,
    marginBottom: '20px',
  },
  body1: {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '36px',
    marginBottom: '40px',
  },
  highlight: {
    color: theme.palette.mode.highlight,
  },
}));

const customTabletMediaQuery = '(max-width: 1300px)';
const OttoWhitelistSection = () => {
  const classes = useStyles();
  const isTablet = useMediaQuery(customTabletMediaQuery);
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      {!isTablet && (
        <div className={classes.image}>
          <Image
            layout="fill"
            objectFit="cover"
            src={WhiteListLeftBg}
            alt="whitelist"
          />
        </div>
      )}
      {isTablet && (
        <div className={classes.tabletImage}>
          <Image
            layout="fill"
            objectFit="cover"
            src={WhiteListTopBg}
            alt="whitelist"
          />
        </div>
      )}
      <div
        className={`${classes.content} ${classes.content}`}
      >
        <p className={classes.body2}>{t('otto.whitelist.amount')}</p>
        <h3 className={classes.h3}>5,000 Ottos</h3>
        <p className={classes.body1}>
          {t('otto.whitelist.joinDescription1')}
          <br />
          {t('otto.whitelist.joinDescription2')}
        </p>
        <RoundedButton
          href="https://discord.gg/otterclam"
          type="solid"
          text={t('otto.whitelist.joinButton')}
        />
      </div>
      {!isTablet && (
        <div className={classes.image}>
          <Image
            layout="fill"
            objectFit="cover"
            src={WhiteListRightBg}
            alt="whitelist"
          />
        </div>
      )}
    </div>
  );
};
export default OttoWhitelistSection;
