import { Box, Link } from '@material-ui/core'
import Image from 'next/image'
import { ComponentProps, CSSProperties } from 'react'

type BoxProps = ComponentProps<typeof Box>
type ButtonType = 'outline' | 'solid' | 'icon'
type Props = BoxProps & {
  text?: string
  href?: string
  type?: ButtonType
  icon?: string | StaticImageData
}

type ButtonConfig = Pick<BoxProps, 'bgcolor' | 'color' | 'border'>
const STYLE: Record<ButtonType, ButtonConfig> = {
  outline: {
    border: '2px solid',
    bgcolor: '',
    color: 'text.primary',
  },
  solid: {
    bgcolor: 'otter.otterBlue',
    color: 'otter.white',
  },
  icon: {
    border: '2px solid',
    bgcolor: '',
    color: 'text.primary',
  },
}
const ICON_BASE_STYLE: CSSProperties = { width: '20px', height: '20px', verticalAlign: 'middle' }
const ICON_SPACING: CSSProperties = { marginRight: '10px', marginLeft: '-10px' }

const RoundedButton = ({ type = 'solid', className = '', text, href, icon, ...boxProps }: Props) => {
  return (
    <Link href={href} target="__blank">
      <Box className={'otto-rounded-button ' + className} {...STYLE[type]} {...boxProps}>
        {icon && (
          <Box style={{ ...ICON_BASE_STYLE, ...ICON_SPACING }}>
            <Image src={icon} alt={text} width={20} height={20} />
          </Box>
        )}
        <p>{text}</p>
      </Box>
    </Link>
  )
}

export default RoundedButton
