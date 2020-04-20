import { darken, lighten } from 'polished';

const colors = {
  primary: '#425887',
  primaryLight: lighten(0.2)('#425887'),
  primaryDark: darken(0.2)('#425887'),
  secondary: '#2B8682',
  secondaryDark: darken(0.2)('#2B8682'),
  secondaryLight: lighten(0.2)('#2B8682'),
  other: '#D3EAE8',
  otherDark: darken(0.2)('#D3EAE8'),
  otherLight: lighten(0.2)('#D3EAE8'),

  dark: '#000',
  light: '#fff',
};

export default colors;
