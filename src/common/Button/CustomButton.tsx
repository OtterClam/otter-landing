import { ElementType, ComponentProps, forwardRef, CSSProperties } from 'react';

import { Box, SvgIcon, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '44px',
    borderRadius: '10px',
    padding: '0 30px',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '16px',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 20px'
    },
  },
  icon: {
    padding: '10px',
    borderRadius: '10px'
  }
}));

type BoxProps = ComponentProps<typeof Box>;
type ButtonType = 'outline' | 'solid' | 'icon';
type Props = BoxProps & {
  text?: string;
  type?: ButtonType;
  Icon?: ElementType<any>;
  href?: string;
  target?: string;
};

type ButtonConfig = Partial<Pick<BoxProps, 'bgcolor' | 'color' | 'border'>>;
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
};
const ICON_BASE_STYLE: CSSProperties = { width: '20px', height: '20px', verticalAlign: 'middle' };
const ICON_SPACING: CSSProperties = { marginRight: '10px', marginLeft: '-10px' };

const CustomButton = forwardRef<any, Props>(
  ({ type = 'solid', className = '', component, text, Icon, ...props }, ref) => {
    component = props.href ? 'a' : component;
    const classes = useStyles();
    if (type === 'icon') {
      return (
        <Box
          {...({ ref } as any)}
          className={`${classes.icon} ${className}`}
          {...STYLE['icon']}
          component={component}
          {...props}
        >
          {Icon && <SvgIcon component={Icon} style={{ ...ICON_BASE_STYLE }} />}
        </Box>
      );
    }
    return (
      <Box
        {...({ ref } as any)}
        className={`${classes.button} ${className}`}
        {...STYLE[type]}
        component={component}
        {...props}
      >
        {Icon && <SvgIcon component={Icon} style={{ ...ICON_BASE_STYLE, ...ICON_SPACING }} />}
        <p>{text}</p>
      </Box>
    );
  },
);

export default CustomButton;
