import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import colors from '~/styles/colors';

type ColorType = 'primary' | 'secondary' | 'other';
type ThemeType = 'dark' | 'light' | 'normal';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  typeColor: ColorType;
  theme?: ThemeType;
};

const themingColors = {
  primary: {
    dark: {
      bg: colors.primaryDark,
      bgHover: colors.primaryLight,
      color: colors.primaryLight,
      colorHover: colors.primaryDark,
    },
    light: {
      bg: colors.primaryLight,
      bgHover: colors.primaryDark,
      color: colors.primaryDark,
      colorHover: colors.primaryLight,
    },
    normal: {
      bg: colors.primary,
      bgHover: colors.primaryDark,
      color: colors.primaryDark,
      colorHover: colors.primary,
    },
  },
  secondary: {
    dark: {
      bg: colors.secondaryDark,
      bgHover: colors.secondaryLight,
      color: colors.secondaryLight,
      colorHover: colors.secondaryDark,
    },
    light: {
      bg: colors.secondaryLight,
      bgHover: colors.secondaryDark,
      color: colors.secondaryDark,
      colorHover: colors.secondaryLight,
    },
    normal: {
      bg: colors.secondary,
      bgHover: colors.secondaryDark,
      color: colors.secondaryDark,
      colorHover: colors.secondary,
    },
  },
  other: {
    dark: {
      bg: colors.otherDark,
      bgHover: colors.otherLight,
      color: colors.otherLight,
      colorHover: colors.otherDark,
    },
    light: {
      bg: colors.otherLight,
      bgHover: colors.otherDark,
      color: colors.otherDark,
      colorHover: colors.otherLight,
    },
    normal: {
      bg: colors.other,
      bgHover: colors.otherDark,
      color: darken(0.2)(colors.otherDark),
      colorHover: lighten(0.2)(colors.other),
    },
  },
};

const themedColor = (color: ColorType, theme: ThemeType) => {
  const colorObj = themingColors[color];
  return colorObj[theme];
};

export const Container = styled.button<ButtonProps>`
  background-color: ${props => themedColor(props.typeColor, props.theme).bg};
  min-width: 240px;
  color: ${props => themedColor(props.typeColor, props.theme).color};
  opacity: ${props => (props.disabled ? '0.2' : '1')};
  padding: 15px 70px;
  border-radius: 20px;
  border: 2px solid ${props => themedColor(props.typeColor, props.theme).color};
  font-weight: bold;
  box-shadow: 0 0 3px #0009;

  &.hvr-radial-out {
    background-color: ${props => themedColor(props.typeColor, props.theme).bg};

    &:before {
      border-radius: 20px;
      background: ${props => themedColor(props.typeColor, props.theme).bgHover};
    }
    &:hover {
      color: ${props => themedColor(props.typeColor, props.theme).colorHover};
    }
  }
`;

Container.defaultProps = {
  theme: 'normal',
};
