import { ReactNode } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  section: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: '44px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
      gridColumnGap: '0px',
      gridRowGap: '40px',
      textAlign: 'center',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  image: {
    width: '100%',
  },
  h4: {
    fontSize: '48px',
    fontWeight: 800,
    lineHeight: '72px',
    textAlign: 'center',
    margin: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: '36px',
      lineHeight: '54px',
    },
  },
  h5: {
    fontSize: '36px',
    fontWeight: 800,
    lineHeight: '54px',
    margin: 0,
    marginBottom: '10px',
    [theme.breakpoints.down('md')]: {
      fontSize: '24px',
      lineHeight: '36px',
    },
  },
  body1: {
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '28px',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
  slogan: {
    fontSize: '20px',
    lineHeight: '30px',
    marginBottom: '40px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
      lineHeight: '28px',
      marginBottom: '20px',
    },
  },
}))

interface ImageProps {
  imgSrc: string | StaticImageData
}
const ImageSection = ({ imgSrc }: ImageProps) => {
  const classes = useStyles();
  return <div className={classes.image}><Image src={imgSrc} alt="" loading="eager" /></div>
}

interface TextProps {
  subtitle: ReactNode
  content: ReactNode
}
const TextSection = ({ subtitle, content }: TextProps) => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <h5 className={classes.h5}>{subtitle}</h5>
      <p className={classes.body1}>{content}</p>
    </div>
  )
}

interface Props {
  color: string
  bgcolor: string
  title: ReactNode
  slogan: ReactNode
  imgSrc: string | StaticImageData
  subtitle: ReactNode
  content: ReactNode;
}

const ImageTextSection = ({ color, bgcolor, title, slogan, imgSrc, subtitle, content }: Props) => {
  const classes = useStyles();
  return (
    <Box className={`container`} color={color} bgcolor={bgcolor}>
      <h4 className={classes.h4}>{title}</h4>
      <p className={classes.slogan}>{slogan}</p>
      <div className={classes.section}>
        <ImageSection imgSrc={imgSrc} />
        <TextSection subtitle={subtitle} content={content} />
      </div>
    </Box>
  )
}

export default ImageTextSection
