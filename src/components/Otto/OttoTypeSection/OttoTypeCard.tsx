import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'
import { OttoType, OttoTypeMetadata } from './type'
import OttoOttoImage from './otto_otto.png'
import OttoLottieImage from './otto_lottie.png'
import OttoCleoImage from './otto_cleo.png'
import OttoPupImage from './otto_pup.jpg'
import OttoVXImage from './otto_vx.jpg'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.mode.white,
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '40px',
    [theme.breakpoints.down('sm')]: {
      padding: '20px',
    },
  },
  image: {
    width: '100%',
    marginBottom: '15px',
  },
  h5: {
    color: theme.palette.mode.otterDark,
    fontSize: '20px',
    fontWeight: 700,
    textAlign: 'center',
    lineHeight: '30px',
    margin: 0,
    marginBottom: '15px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      lineHeight: '28px',
    },
  },
  body1: {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '36px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      lineHeight: '30px',
    },
  },
  body2: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '22px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      lineHeight: '18px',
    },
  },
  countBox: {
    backgroundColor: theme.palette.mode.lightGray300,
    borderRadius: '10px',
    padding: '10px 20px',
    marginTop: '15px',
    textAlign: 'left',
  },
}))

interface ImageProps {
  className: string
  type: OttoType
}
const OttoImage = ({ className, type }: ImageProps) => {
  const imgSrc = (() => {
    switch (type) {
      case 'otto_lottie':
        return OttoLottieImage
      case 'otto_otto':
        return OttoOttoImage
      case 'otto_cleo':
        return OttoCleoImage
      case 'otto_pup':
        return OttoPupImage
      case 'otto_vx':
        return OttoVXImage
    }
  })()
  return (
    <div className={className}>
      <Image src={imgSrc} alt={type} placeholder="blur" />
    </div>
  )
}

interface Props {
  metadata: OttoTypeMetadata
}
const OttoTypeCard = ({ metadata }: Props) => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={`${classes.container} ${classes.container}`}>
      <div>
        <h5 className={classes.h5}>{metadata.name}</h5>
        <OttoImage className={classes.image} type={metadata.type} />
        <p className={classes.body2}>{metadata.description}</p>
      </div>
      <div className={`${classes.countBox} ${classes.countBox}`}>
        <p className={classes.body2}>{t('otto.type.population')}</p>
        <p className={classes.body1}>{metadata.total === null ? t('otto.type.comingSoon') : `${metadata.total}`}</p>
      </div>
    </div>
  )
}

export default OttoTypeCard
