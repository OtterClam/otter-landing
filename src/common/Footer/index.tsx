import { Link, makeStyles } from '@material-ui/core';
import { RESOURCES_LINKS, INVOLVED_LINKS } from './constant';
import PartnershipLightModeImage from 'public/logo-partnership-light.png';
import SlowmistLightModeImage from 'public/logo-slowmist-light.png';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.mode.lightGray200,
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr',
    gridColumnGap: '30px',
    padding: '94px 245px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'auto',
      gridColumnGap: '0px',
      gridRowGap: '40px',
      padding: '40px 20px',
    },
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  partnership: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 'calc(100% - 42px)',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  partnershipText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      marginTop: '24px',
    },
  },
  partnershipImage: {
    verticalAlign: 'middle',
  },
  auditText: {
    display: 'flex',
    marginLeft: '30px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '24px',
      marginLeft: '0px',
    },
  },
  partnershipLogo: {
    maxWidth: '310px',
  },
  links: {
    display: 'grid',
    gridRowGap: '10px',
  },
  h5: {
    color: theme.palette.mode.darkGray200,
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '24px',
    marginBottom: '20px',
  },
  body2: {
    color: theme.palette.mode.darkGray200,
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '18px',
  },
  link: {
    color: theme.palette.mode.darkBlue,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  slowmist: {
    height: '16px',
    marginLeft: '4px',
  },
}));

const OttoFooter = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.container}`}>
      <div className={classes.column}>
        <h5 className={classes.h5}>
          IN PARTNERSHIP WITH
        </h5>
        <div className={`${classes.column} ${classes.partnership}`}>
          <div className={classes.partnershipLogo}>
            <Image
              src={PartnershipLightModeImage}
              width={310}
              height={62}
              alt="partnership"
              layout="fixed"
            />
          </div>

          <div className={classes.partnershipText}>
            <p className={classes.body2}>
              © 2022 OtterClam All Rights Reserved
            </p>
            <p
              className={`${classes.body2} ${classes.auditText}`}
            >
              Audited by
              <div className={classes.slowmist}>
                <Image
                  src={SlowmistLightModeImage}
                  width={80}
                  height={18}
                  alt="slowmist"
                  layout="fixed"
                />
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.column}>
        <h5 className={classes.h5}>
          RESOURCES
        </h5>
        <div className={classes.links}>
          {RESOURCES_LINKS.map((link, index) => (
            <Link
              key={`resource-${index}`}
              className={classes.link}
              href={link.href}
              target="__blank"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
      <div className={classes.column}>
        <h5 className={classes.h5}>
          GET INVOLVED
        </h5>
        <div className={classes.links}>
          {INVOLVED_LINKS.map((link, index) => (
            <Link
              key={`involved-${index}`}
              className={classes.link}
              href={link.href}
              target="__blank"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OttoFooter;
