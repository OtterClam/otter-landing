import { makeStyles } from "@material-ui/core"
import OttoBanner from 'src/components/Otto/OttoBanner'
import OttoWhitelistSection from 'src/components/Otto/OttoWhitelistSection'
import OttoGetSection from 'src/components/Otto/OttoGetSection'
import OttoTypeSection from 'src/components/Otto/OttoTypeSection'
import OttoComponentSection from 'src/components/Otto/OttoComponentSection'
import OttoFactorySection from 'src/components/Otto/OttoFactorySection'
import OtterRiverSection from 'src/components/Otto/OttoRiverSection'
import OttoUsageSection from 'src/components/Otto/OtterUsageSection'
import OttoCountdownSection from 'src/components/Otto/OttoCountdownSection'

const useStyles = makeStyles((theme) => ({
  view: {
    backgroundColor: theme.palette.mode.white,
    color: theme.palette.mode.otterDark,
  },
}))

const OttoView = () => {
  const classes = useStyles()
  return (
    <div className={classes.view}>
      <OttoBanner />
      <OttoWhitelistSection />
      <OttoGetSection />
      <OttoTypeSection />
      <OttoComponentSection />
      <OttoFactorySection />
      <OtterRiverSection />
      <OttoUsageSection />
      <OttoCountdownSection />
    </div>
  )
}
export default OttoView
