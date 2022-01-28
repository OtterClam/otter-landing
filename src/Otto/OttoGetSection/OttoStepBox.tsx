import { makeStyles } from '@material-ui/core'
import RoundedButton from '../common/RoundedButton'
import { DescriptionMetadata } from './type'
import ImageStep1 from './step1.png'
import ImageStep2 from './step2.png'
import ImageStep3 from './step3.png'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  label: {
    color: theme.palette.mode.white,
    backgroundColor: theme.palette.otter.clamPink,
    fontSize: '24px',
  },
  content: {
    color: theme.palette.mode.otterDark,
    fontSize: '16px',
    lineHeight: '24px',
  },
  highlight: {
    color: theme.palette.otter.clamPink,
    fontSize: '16px',
    lineHeight: '24px',
  },
}))

const StepImage = ({ number }: { number: number }) => {
  switch (number) {
    case 1:
      return <Image className="otto-step-box__image" src={ImageStep1} alt="step1" />
    case 2:
      return <Image className="otto-step-box__image" src={ImageStep2} alt="step2" />
    case 3:
      return <Image className="otto-step-box__image" src={ImageStep3} alt="step3" />
    default:
      return <></>
  }
}

interface Props {
  metadata: DescriptionMetadata
  number: number
}
const OttoStepBox = ({ metadata, number }: Props) => {
  const classes = useStyles()
  return (
    <div className="otto-step-box__container">
      <div className={`otto-step-box__numberLabel ${classes.label}`}>{number}</div>
      <StepImage number={number} />
      {metadata.description.map((description, index) => {
        if (description.type === 'highlight')
          return (
            <span className={classes.highlight}>
              {description.text}
              <br />
            </span>
          )
        return (
          <span key={`desc-${index}`} className={classes.content}>
            {description.text}
          </span>
        )
      })}
      <div className="otto-step-box__button">
        <RoundedButton href={metadata.button.href} text={metadata.button.text} />
      </div>
    </div>
  )
}

export default OttoStepBox
