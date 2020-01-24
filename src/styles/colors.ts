import Color from 'color';

const colors = {
  primary: '#425887',
  primaryLight: Color('#425887')
    .lighten(0.2)
    .toString(),
  primaryDark: Color('#425887')
    .darken(0.2)
    .toString(),
  secondary: '#da0000',
  secondaryDark: Color('#da0000')
    .darken(0.2)
    .toString(),
  secondaryLight: Color('#da0000')
    .lighten(0.2)
    .toString(),
  other: '#dddcf2',
  otherDark: Color('#dddcf2')
    .darken(0.2)
    .toString(),
  otherLight: Color('#dddcf2')
    .lighten(0.2)
    .toString(),

  dark: '#000',
  light: '#fff',
};

export default colors;
