import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'
import OttoUsageCard from './OttoUsageCard'
import { OttoUsageMetadata } from './type'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.mode.white,
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridColumnGap: '30px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridColumnGap: '20px',
      gridRowGap: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'auto',
      gridColumnGap: '0px',
    },
  },
  h4: {
    fontSize: '48px',
    fontWeight: 800,
    textAlign: 'center',
    margin: 0,
    marginBottom: '40px',
    [theme.breakpoints.down('md')]: {
      fontSize: '36px',
      lineHeight: '54px',
    },
  },
}))

const OtterUsageSection = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const OTTO_USAGE_METADATA: OttoUsageMetadata[] = useMemo(
    () => [
      {
        type: 'playable_avatar',
        title: t('otto.usage.playableTitle'),
        content: t('otto.usage.playableContent'),
      },
      {
        type: 'commercial_right',
        title: t('otto.usage.commercialTitle'),
        content: t('otto.usage.commercialContent'),
      },
      {
        type: 'beneficial_ecosystem',
        title: t('otto.usage.beneficialTitle'),
        content: t('otto.usage.beneficialContent'),
      },
    ],
    [t]
  )

  return (
    <div className={`container ${classes.container}`}>
      <h4 className={classes.h4}>{t('otto.usage.title')}</h4>
      <div className={classes.cards}>
        {OTTO_USAGE_METADATA.map((metadata) => (
          <OttoUsageCard key={metadata.type} metadata={metadata} />
        ))}
      </div>
    </div>
  )
}
export default OtterUsageSection
