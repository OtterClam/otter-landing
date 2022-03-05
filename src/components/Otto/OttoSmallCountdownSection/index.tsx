import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import Countdown from 'src/common/Countdown'
import { OTTO_WL_MINT_START_TIME } from 'src/constants'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.mode.otterDark,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '166px',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 0,
  },
}))

const OttoSmallCountdownSection = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.container}>
      <Countdown
        title={t('otto.countdown.mintSubtitle')}
        color="mode.white"
        bgcolor="transparent"
        dueDate={OTTO_WL_MINT_START_TIME}
        onTimeUp={() => {}}
      />
      {/* TODO|OTTO: add time up callback */}
    </div>
  )
}
export default OttoSmallCountdownSection
