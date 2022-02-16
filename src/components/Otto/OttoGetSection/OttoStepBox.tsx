import { makeStyles } from '@material-ui/core'
import RoundedButton from '../../common/RoundedButton'
import { DescriptionMetadata } from './type'
import ImageStep1 from './step1.png'
import ImageStep2 from './step2.png'
import ImageStep3 from './step3.png'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
  },
  label: {
    color: theme.palette.mode.white,
    backgroundColor: theme.palette.otter.clamPink,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    margin: 'auto',
    fontSize: '24px',
    fontWeight: 700,
  },
  image: {
    width: '100%',
    margin: '30px auto 25px auto',
  },
  content: {
    color: theme.palette.mode.otterDark,
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 700,
    whiteSpace: 'pre-line',
  },
  button: {
    marginTop: '20px',
  },
  highlight: {
    color: theme.palette.otter.clamPink,
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 700,
  },
}))

const StepImage = ({ number }: { number: number }) => {
  const classes = useStyles()
  switch (number) {
    case 1:
      return (
        <div className={classes.image}>
          <Image src={ImageStep1} alt="step1" placeholder="blur" />
        </div>
      )
    case 2:
      return (
        <div className={classes.image}>
          <Image src={ImageStep2} alt="step2" placeholder="blur" />
        </div>
      )
    case 3:
      return (
        <div className={classes.image}>
          <Image src={ImageStep3} alt="step3" placeholder="blur" />
        </div>
      )
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
    <div className={classes.container}>
      <div className={classes.label}>{number}</div>
      <StepImage number={number} />
      {metadata.description.map((description, index) => {
        if (description.type === 'highlight')
          return (
            <span key={`desc-${index}`} className={classes.highlight}>
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
      <div className={classes.button}>
        <RoundedButton href={metadata.button.href} text={metadata.button.text} />
      </div>
    </div>
  )
}

export default OttoStepBox
