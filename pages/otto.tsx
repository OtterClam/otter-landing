import { makeStyles } from '@material-ui/core'
import Head from 'next/head'
import OttoRoadMapSection from 'src/components/Otto/OtterRoadmapSection'
import OttoUsageSection from 'src/components/Otto/OtterUsageSection'
import OttoBanner from 'src/components/Otto/OttoBanner'
import OttoComponentSection from 'src/components/Otto/OttoComponentSection'
import OttoCountdownSection from 'src/components/Otto/OttoCountdownSection'
import OttoFactorySection from 'src/components/Otto/OttoFactorySection'
import OttoGetSection from 'src/components/Otto/OttoGetSection'
import OtterRiverSection from 'src/components/Otto/OttoRiverSection'
import OttoSmallCountdownSection from 'src/components/Otto/OttoSmallCountdownSection'
import OttoTypeSection from 'src/components/Otto/OttoTypeSection'
import OttoWhitelistSection from 'src/components/Otto/OttoWhitelistSection'

const useStyles = makeStyles((theme) => ({
  view: {
    backgroundColor: theme.palette.mode.white,
    color: theme.palette.mode.otterDark,
  },
}))

const OttoPage = () => {
  const classes = useStyles()
  return (
    <div className={classes.view}>
      <Head>
        <title>Otto | The Otter Kingdom&apos;s newest NFT innovation</title>
        <meta property="og:title" content="Otto | The First Citizens of the Otter Kingdom" />
        <meta
          property="og:description"
          content="Ottos are unique and randomly generated 2D NFT Social Avatars created to enhance your online experience. Some appear normal. Some look crazy. Some are just damn cool!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_URL + '/otto-og.jpg'} />
      </Head>
      <OttoBanner />
      <OttoWhitelistSection />
      <OttoGetSection />
      <OttoTypeSection />
      <OttoComponentSection />
      <OttoFactorySection />
      <OtterRiverSection />
      <OttoUsageSection />
      <OttoRoadMapSection />
      <OttoCountdownSection />
    </div>
  )
}
export default OttoPage
