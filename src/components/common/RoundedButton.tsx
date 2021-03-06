import { Box, SvgIconProps, makeStyles } from '@material-ui/core'
import { ComponentProps, CSSProperties, ElementType } from 'react'

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '44px',
    borderRadius: '22px',
    padding: '0 30px',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '16px',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 20px'
    },
  },
  outline: {
    border: '2px solid',
    backgroundColor: '',
    color: theme.palette.mode.otterDark,
  },
  solid: {
    backgroundColor: theme.palette.otter.otterBlue,
    color: `${theme.palette.otter.white} !important`,
  },
  icon: {
    border: '2px solid',
    backgroundColor: '',
    color: theme.palette.mode.otterDark,
  },
  disable: {
    backgroundColor: theme.palette.mode.lightGray400,
    color: theme.palette.otter.white,
    cursor: 'not-allowed',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
  }
}))

type BoxProps = ComponentProps<typeof Box>
export type ButtonType = 'outline' | 'solid' | 'icon' | 'disable'
type Props = BoxProps & {
  text?: string
  href?: string
  target?: string
  type?: ButtonType
  // icon?: string | StaticImageData
  Icon?: JSX.Element
  iconSvgProps?: SvgIconProps
}

const ICON_BASE_STYLE: CSSProperties = { width: '20px', height: '20px', verticalAlign: 'middle' }
const ICON_SPACING: CSSProperties = { marginRight: '10px', marginLeft: '-10px' }

const RoundedButton = ({ type = 'solid', className = '', text, href, target = '_blank', Icon, iconSvgProps, ...boxProps }: Props) => {
  const classes = useStyles();
  return (
    <a href={href} target={target}>
      <Box className={`${classes.button} ${classes[type]} ${className}`} {...boxProps}>
        {Icon && <span className={classes.iconContainer}>{Icon}</span>}
        <p>{text}</p>
      </Box>
    </a>
  )
}

export default RoundedButton
