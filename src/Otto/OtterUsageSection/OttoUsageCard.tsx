import { makeStyles } from '@material-ui/core'
import { OttoUsageMetadata, UsageType } from './type'

import BeneficialEcosystemImage from './image-beneficial_ecosystem.png'
import CommercialRightImage from './image-commercial_right.jpg'
import PlayableAvatarImage from './image-playable_avatar.png'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.mode.lightGray200,
  },
  title: {
    color: theme.palette.mode.otterDark,
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
    <div className={`otto-usage-card__container ${classes.card}`}>
      <div>
        <h5 className={`${classes.title} otto-usage-card__title`}>{metadata.title}</h5>
        <p className="otto-usage-card__content">{metadata.content}</p>
      </div>
      <UsageImage className="otto-usage-card__image" type={metadata.type} />
    </div>
  )
}
export default OttoUsageCard
