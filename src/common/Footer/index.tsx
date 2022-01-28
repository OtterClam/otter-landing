import { Typography, Link, makeStyles } from '@material-ui/core'
import { RESOURCES_LINKS, INVOLVED_LINKS } from './constant'
import PartnershipLightModeImage from 'public/logo-partnership-light.png'
import SlowmistLightModeImage from 'public/logo-slowmist-light.png'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.mode.lightGray200,
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
    fontWeight: 400,
    lineHeight: '24px',
  },
  slowmist: {
    height: '16px',
    marginLeft: '4px',
  },
}))

const OttoFooter = () => {
  const classes = useStyles()
  return (
    <div className={`footer__container ${classes.container}`}>
      <div className="footer__partnership">
        <Typography variant="h5" className={classes.h5}>
          IN PARTNERSHIP WITH
        </Typography>
        <div className="footer__partnership__container">
          <Image
            className="footer__partnership__logo"
            src={PartnershipLightModeImage}
            width={310}
            height={62}
            alt="partnership"
            layout="fixed"
          />
          <div className="footer__partnership__text">
            <Typography variant="body1" className={classes.body2}>
              © 2022 OtterClam All Rights Reserved
            </Typography>
            <Typography variant="body1" className={`${classes.body2} audit`}>
              Audited by
              <Image
                className={classes.slowmist}
                src={SlowmistLightModeImage}
                width={80}
                height={18}
                alt="slowmist"
                layout="fixed"
              />
            </Typography>
          </div>
        </div>
      </div>
      <div className="footer__resources">
        <Typography variant="h5" className={classes.h5}>
          RESOURCES
        </Typography>
        <div className="footer__links">
          {RESOURCES_LINKS.map((link, index) => (
            <Link key={`resource-${index}`} className={classes.link} href={link.href} target="__blank">
              {link.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="footer__involved">
        <Typography variant="h5" className={classes.h5}>
          GET INVOLVED
        </Typography>
        <div className="footer__links">
          {INVOLVED_LINKS.map((link, index) => (
            <Link key={`involved-${index}`} className={classes.link} href={link.href} target="__blank">
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
export default OttoFooter
