import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    background: '#FFFFFF',
    container: '#F5F5F5',
    containerSec: '#C4C4C4',
    text: '#0D062D',
    textSec: '#787486',
    selected: 'rgba(80, 48, 229, 0.08)',
    divider: '#DBDBDB',
    greyBorder: '#787486',
    purpleDivider: '#5030E5',
    yelloDivider: '#FFA500',
    greenDivider: '#8BC48A',
    pinkDivider: '#E4CCFD',
    blueDivider: '#76A5EA',
    bgGreen: 'rgba(131, 194, 157, 0.2)',
    textGreen: '#68B266',
    bgOrange: 'rgba(223, 168, 116, 0.2)',
    textOrange: '#D58D49',
    bgRed: 'rgba(216, 114, 125, 0.1)',
    textRed: '#D8727D',
    green: '#7AC555'
  }
};

const fonts = {
  heading: `'Inter', 'Open Sans', sans-serif`,
  body: `'Inter', 'Raleway', sans-serif`
};

export const theme = extendTheme({ colors, fonts });
