
export interface Colors {
  white: string,

  gray100: string,
  gray300: string,
  gray400: string,
  gray500: string,
  gray600: string,
  gray700: string,
  gray800: string,
  gray900: string,

  green300: string,
  green500: string,
  green700: string,

  red300: string,
  red500: string,
  red700: string,
}

export const defaultTheme: Colors = {
    white: '#fff',
  
    gray100: '#E1E1E6',
    gray300: '#C4C4CC',
    gray400: '#8D8D99',
    gray500: '#7C7C8A',
    gray600: '#323238',
    gray700: '#29292E',
    gray800: '#202024',
    gray900: '#121214',
  
    green300: '#00B37E',
    green500: '#00875F',
    green700: '#015F43',
  
    red300: '#F75A68',
    red500: '#AB222E',
    red700: '#7A1921',
  } as const
