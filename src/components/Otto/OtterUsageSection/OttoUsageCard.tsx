import { makeStyles } from '@material-ui/core'
import { OttoUsageMetadata, UsageType } from './type'

import BeneficialEcosystemImage from './image-beneficial_ecosystem.png'
import CommercialRightImage from './image-commercial_right.jpg'
import PlayableAvatarImage from './image-playable_avatar.png'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.mode.lightGray200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10px',
    padding: '40px',
    [theme.breakpoints.down('md')]: {
      padding: '20px',
    },
  },
  title: {
    color: theme.palette.mode.otterDark,
    fontSize: '20px',
    fontWeight: 700,
    textAlign: 'center',
    lineHeight: '30px',
    margin: '0',
    marginBottom: '15px',
  },
  image: {
    width: '100%',
  },
  content: {
    fontWeight: 400,
    textAlign: 'center',
    lineHeight: '22px',
    marginBottom: '15px',
  },
}))

interface ImageProps {
  className: string
  type: UsageType
}
const UsageImage = ({ className, type }: ImageProps) => {
  const imgSrc = (() => {
    switch (type) {
      case 'playable_avatar':
        return PlayableAvatarImage
      case 'commercial_right':
        return CommercialRightImage
      case 'beneficial_ecosystem':
        return BeneficialEcosystemImage
    }
  })()
  return <Image className={className} src={imgSrc} alt="type" />
}

interface Props {
  metadata: OttoUsageMetadata
}
const OttoUsageCard = ({ metadata }: Props) => {
  const classes = useStyles()
  return (
    <div className={classes.card}>
      <div>
        <h5 className={classes.title}>{metadata.title}</h5>
        <p className={classes.content}>{metadata.content}</p>
      </div>
      <UsageImage className={classes.image} type={metadata.type} />
    </div>
  )
}
export default OttoUsageCard
