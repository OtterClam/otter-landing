type CommonColors = {
    clamPink: string,
    clamPinkHover: string,
    otterBlue: string,
    otterBlueHover: string,
    otterGreen: string,
    otterDark: string,
    white: string,
}

type ThemeColors = {
    white: string,
    darkBlue: string,
    lightGray100: string,
    lightGray200: string,
    lightGray300: string,
    lightGray400: string,
    darkGray100: string,
    darkGray200: string,
    darkGray300: string,
    darkGray400: string,
    highlight: string,
}

export interface Colors { 
    common: CommonColors;
    light: ThemeColors;
    dark: ThemeColors;
}

export const colors: Colors = {
    common: {
        clamPink: '#FF6854',
        clamPinkHover: '#F5523C',
        otterBlue: '#3B4BD8',
        otterBlueHover: '#303FC7',
        otterGreen: '#38D076',
        otterDark: '#1D2654',
        white: '#FFFFFF',
      },
      light: {
        white: '#FFFFFF',
        darkBlue: '#0A0E23',
        lightGray100: '#F7F9FB',
        lightGray200: '#E9F0F3',
        lightGray300: '#DBE6EC',
        lightGray400: '#CCD4E0',
        darkGray100: '#8193B5',
        darkGray200: '#5E6E99',
        darkGray300: '#434E77',
        darkGray400: '#303E65',
        highlight: '#FF6854',
      },
      dark: {
        white: '#0A0E23',
        darkBlue: '#FFFFFF',
        lightGray100: '#101631',
        lightGray200: '#212B4F',
        lightGray300: '#303E65',
        lightGray400: '#425475',
        darkGray100: '#8192B4',
        darkGray200: '#A1AEC9',
        darkGray300: '#CCD6E7',
        darkGray400: '#DBE6EC',
        highlight: '#FF6854',
      },
}