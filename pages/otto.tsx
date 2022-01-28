import OttoHeader from 'src/Otto/OttoHeader'
import OttoBanner from 'src/Otto/OttoBanner'
import OttoWhitelistSection from 'src/Otto/OttoWhitelistSection'
import OttoGetSection from 'src/Otto/OttoGetSection'
import OttoTypeSection from 'src/Otto/OttoTypeSection'
import OttoComponentSection from 'src/Otto/OttoComponentSection'
import OttoFactorySection from 'src/Otto/OttoFactorySection'
import OtterRiverSection from 'src/Otto/OttoRiverSection'
import OttoUsageSection from 'src/Otto/OtterUsageSection'
import OttoCountdownSection from 'src/Otto/OttoCountdownSection'
import OttoFooter from 'src/common/Footer'

// const useStyles = makeStyles((theme) => ({
//   view: {
//     backgroundColor: theme.palette.mode.white,
//     color: theme.palette.mode.otterDark,
//   },
// }))

const OttoView = () => {
  // const classes = useStyles()
  return (
    <div>
      <OttoHeader />
      <OttoBanner />
      <OttoWhitelistSection />
      <OttoGetSection />
      <OttoTypeSection />
      <OttoComponentSection />
      <OttoFactorySection />
      <OtterRiverSection />
      <OttoUsageSection />
      <OttoCountdownSection />
      <OttoFooter />
    </div>
  )
}
export default OttoView
