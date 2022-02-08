import { Box, SvgIcon, SvgIconProps, makeStyles } from '@material-ui/core'
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
    color: theme.palette.otter.white,
  },
  icon: {
    border: '2px solid',
    backgroundColor: '',
    color: theme.palette.mode.otterDark,
  },
}))

type BoxProps = ComponentProps<typeof Box>
type ButtonType = 'outline' | 'solid' | 'icon'
type Props = BoxProps & {
  text?: string
  href?: string
  type?: ButtonType
  // icon?: string | StaticImageData
  icon?: ElementType<any>
  iconSvgProps?: SvgIconProps
}

const ICON_BASE_STYLE: CSSProperties = { width: '20px', height: '20px', verticalAlign: 'middle' }
const ICON_SPACING: CSSProperties = { marginRight: '10px', marginLeft: '-10px' }

const RoundedButton = ({ type = 'solid', className = '', text, href, icon, iconSvgProps, ...boxProps }: Props) => {
  const classes = useStyles();
  return (
    <a href={href} target="__blank">
      <Box className={`${classes.button} ${classes[type]} ${className}`} {...boxProps}>
        {icon && <SvgIcon component={icon} style={{ ...ICON_BASE_STYLE, ...ICON_SPACING }} {...iconSvgProps} />}
        <p>{text}</p>
      </Box>
    </a>
  )
}

export default RoundedButton
