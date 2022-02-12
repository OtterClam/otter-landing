import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'
import OttoTypeCard from './OttoTypeCard'
import OttoTypeBg from './background-otto_type.png'

import { OttoTypeMetadata } from './type'

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    zIndex: 0,
    backgroundColor: '#0A0E23 !important',

    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0.1,
      background: `url(${OttoTypeBg.src}) top/contain repeat`,
      zIndex: -1,
    },
  },
  title: {
    fontSize: '48px',
    fontWeight: 800,
    lineHeight: '72px',
    textAlign: 'center',
    color: theme.palette.otter.white,
    marginBottom: '40px',
    [theme.breakpoints.down('md')]: {
      fontSize: '36px',
      lineHeight: '54px',
      marginBottom: '20px',
    },
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridColumnGap: '30px',
    gridRowGap: '30px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridRowGap: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'auto',
    },
  },
}))

const OttoTypeSection = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const OTTO_TYPE_METADATA: OttoTypeMetadata[] = useMemo(
    () => [
      {
        name: t('otto.type.ottoName'),
        type: 'otto_otto',
        description: t('otto.type.ottoDescription'),
        total: '2,950',
      },
      {
        name: t('otto.type.lottieName'),
        type: 'otto_lottie',
        description: t('otto.type.lottieDescription'),
        total: '1,950',
      },
      {
        name: t('otto.type.cleoName'),
        type: 'otto_cleo',
        description: t('otto.type.cleoDescription'),
        total: '100',
      },
      {
        name: t('otto.type.pupName'),
        type: 'otto_pup',
        description: t('otto.type.pupDescription'),
        total: null,
      },
      {
        name: t('otto.type.vxName'),
        type: 'otto_vx',
        description: t('otto.type.vxDescription'),
        total: null,
      },
    ],
    [t]
  )
  return (
    <div className={`${classes.container} container`}>
      <h4 className={classes.title}>{t('otto.type.title')}</h4>
      <div className={classes.cards}>
        {OTTO_TYPE_METADATA.map((metadata) => {
          return <OttoTypeCard key={metadata.name} metadata={metadata} />
        })}
      </div>
    </div>
  )
}
export default OttoTypeSection
