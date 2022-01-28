import { useTranslation } from 'react-i18next'
import OttoBuyClamHint from './OttoBuyClamHint'
import OttoDecoLeftImage from './image-countdown_deco_left.png'
import OttoDecoRightImage from './image-countdown_deco_right.png'

import { makeStyles } from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.mode.darkBlue,
  },
  h4: {
    color: theme.palette.mode.white,
  },
}))

const OttoCountdownSection = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={`otto-countdown__container ${classes.container}`}>
      <Image className="otto-countdown__deco left" src={OttoDecoLeftImage} alt="countdown left" />
      <h4 className={`otto-countdown__title ${classes.h4}`}>{t('otto.countdown.mintTitle')}</h4>
      <p className="otto-countdown__content">COMING SOON</p>
      {/* <Countdown
        title={t('otto.countdown.mintSubtitle')}
        color="mode.white"
        bgcolor="mode.darkBlue"
        dueDate={new Date()}
        onTimeUp={() => {}}
      /> */}
      {/* TODO|OTTO: add time up callback */}
      <OttoBuyClamHint />
      <Image className="otto-countdown__deco right" src={OttoDecoRightImage} alt="countdown right" />
    </div>
  )
}
export default OttoCountdownSection
