import { useTranslation } from 'react-i18next'
import { Typography, makeStyles, useMediaQuery } from '@material-ui/core'
import RoundedButton from '../common/RoundedButton'
import WhiteListRightBg from './background-otto_whitelist_right.png'
import WhiteListLeftBg from './background-otto_whitelist_left.png'
import WhiteListTopBg from './background-otto_whitelist_top.png'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.mode.white,
  },
  body2: {
    fontSize: '20px',
    fontWeight: 700,
    marginBottom: '25px',
  },
  h2: {
    fontSize: '100px',
    fontWeight: 800,
  },
  h3: {
    fontSize: '64px',
    fontWeight: 800,
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
}))

const customTabletMediaQuery = '(max-width: 1300px)'
const OttoWhitelistSection = () => {
  const classes = useStyles()
  const isTablet = useMediaQuery(customTabletMediaQuery)
  const { t } = useTranslation()
  return (
    <div className="otto-whitelist__container">
      {!isTablet && (
        <div className="otto-whitelist__image">
          <Image src={WhiteListLeftBg} alt="whitelist" />
        </div>
      )}
      {isTablet && <Image className="otto-whitelist__tablet-image" src={WhiteListTopBg} alt="whitelist" />}
      <div className={`otto-whitelist__content ${classes.content}`}>
        <Typography className={classes.body2} variant="body2">
          {t('otto.whitelist.amount')}
        </Typography>
        <Typography className={classes.h3} variant="h3">
          5,000 Ottos
        </Typography>
        <Typography className={classes.body1} variant="body1">
          {t('otto.whitelist.joinDescription1')}
          <br />
          {t('otto.whitelist.joinDescription2')}
        </Typography>
        <RoundedButton href="https://discord.gg/otterclam" type="solid" text={t('otto.whitelist.joinButton')} />
      </div>
      {!isTablet && (
        <div className="otto-whitelist__image">
          <Image src={WhiteListRightBg} alt="whitelist" />
        </div>
      )}
    </div>
  )
}
export default OttoWhitelistSection
