import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'
import OttoStepBox from './OttoStepBox'

import { DescriptionMetadata } from './type'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.mode.lightGray200,
    textAlign: 'center',
  },
  title: {
    fontSize: '48px',
    lineHeight: '72px',
    fontWeight: 800,
    marginBottom: '40px',
    [theme.breakpoints.down('md')]: {
      fontSize: '36px',
      lineHeight: '54px',
      marginBottom: '20px',
    },
  },
  boxes: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridColumnGap: '20px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'auto',
      gridColumnGap: '0px',
      gridRowGap: '40px',
    },
  },
}))

const OttoGetSection = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const OTTO_STEP_METADATA: DescriptionMetadata[] = useMemo(
    () => [
      {
        description: [
          { type: 'normal', text: t('otto.get.discord1') },
          { type: 'highlight', text: t('otto.get.discordHighlight') },
          { type: 'normal', text: t('otto.get.discord2') },
        ],
        button: { text: t('otto.get.discordButton'), href: 'https://discord.gg/otterclam' },
      },
      {
        description: [
          { type: 'normal', text: t('otto.get.buyClam1') },
          { type: 'highlight', text: t('otto.get.buyClamHighlight') },
          { type: 'normal', text: t('otto.get.buyClam2') },
        ],
        button: {
          text: t('otto.get.buyClamButton'),
          href: 'https://quickswap.exchange/#/swap?outputCurrency=0xC250e9987A032ACAC293d838726C511E6E1C029d',
        },
      },
      {
        description: [{ type: 'normal', text: t('otto.get.incubator1') }],
        button: {
          text: t('otto.get.mintButton'),
          href: 'https://ottopia.app',
        },
      },
      {
        description: [{ type: 'normal', text: t('otto.get.step4') }],
        button: { text: t('otto.get.step4Button'), href: 'https://discord.gg/otterclam' },
      },
    ],
    [t]
  )

  return (
    <div className={`${classes.container} container`}>
      <h4 className={classes.title}>How to get Ottos?</h4>
      <div className={classes.boxes}>
        {OTTO_STEP_METADATA.map((metadata, index) => (
          <OttoStepBox key={`step-${index}`} metadata={metadata} number={index + 1} />
        ))}
      </div>
    </div>
  )
}
export default OttoGetSection
