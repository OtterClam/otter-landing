import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import OttoBuyClamHint from './OttoBuyClamHint'
import OttoDecoLeftImage from './image-countdown_deco_left.png'
import OttoDecoRightImage from './image-countdown_deco_right.png'

import Image from 'next/image'
import Countdown from 'src/common/Countdown'
import { OTTO_WL_MINT_START_TIME } from 'src/constants'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.mode.darkBlue,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 245px 60px 245px',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 0,
    [theme.breakpoints.down('md')]: {
      padding: '80px 20px 80px 20px',
    },
  },
  decoLeft: {
    position: 'absolute',
    width: '30%',
    zIndex: -1,
    top: 0,
    left: 0,
    [theme.breakpoints.down('md')]: {
      width: '40%',
    },
  },
  decoRight: {
    position: 'absolute',
    width: '30%',
    zIndex: -1,
    bottom: '-2px',
    right: 0,
    [theme.breakpoints.down('md')]: {
      width: '40%',
    },
  },
  title: {
    color: theme.palette.mode.white,
    fontSize: '48px',
    lineHeight: '72px',
    fontWeight: 800,
    textAlign: 'center',
    margin: 0,
    marginBottom: '20px',
    [theme.breakpoints.down('md')]: {
      fontSize: '36px',
      lineHeight: '54px',
    },
  },
  content: {
    color: theme.palette.otter.white,
    fontSize: '28px',
  },
}))

const OttoCountdownSection = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.container}>
      <div className={classes.decoLeft}>
        <Image src={OttoDecoLeftImage} alt="countdown left" loading="eager" />
      </div>
      <h4 className={classes.title}>{t('otto.countdown.mintTitle')}</h4>
      <Countdown
        title={t('otto.countdown.mintSubtitle')}
        color="mode.white"
        bgcolor="mode.darkBlue"
        dueDate={OTTO_WL_MINT_START_TIME}
        onTimeUp={() => {}}
      />
      {/* TODO|OTTO: add time up callback */}
      <OttoBuyClamHint />
      <div className={classes.decoRight}>
        <Image src={OttoDecoRightImage} alt="countdown right" placeholder="blur" />
      </div>
    </div>
  )
}
export default OttoCountdownSection
