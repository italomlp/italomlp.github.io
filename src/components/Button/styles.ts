import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import Color from 'color';

import colors from '~/styles/colors';

type ColorsType = keyof Omit<
  typeof colors,
  | 'primaryDark'
  | 'primaryLight'
  | 'secondaryDark'
  | 'secondaryLight'
  | 'otherDark'
  | 'otherLight'
>;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  typeColor: ColorsType;
};

const getRightColorByContrast = (
  color: ColorsType,
  sameColor?: boolean,
  inverted?: boolean
) => {
  const darkColor = colors[`${color}Dark` as ColorsType] || colors.dark;
  const lightColor = colors[`${color}Light` as ColorsType] || colors.light;
  if (Color(colors[color]).contrast(Color(colors.dark)) >= 10) {
    const rightColor = inverted ? lightColor : darkColor;
    return sameColor ? rightColor : colors.dark;
  }
  const rightColor = inverted ? darkColor : lightColor;
  return sameColor ? rightColor : colors.light;
};

export const Container = styled.button<ButtonProps>`
  background-color: ${props => colors[props.typeColor]};
  min-width: 240px;
  color: ${props => getRightColorByContrast(props.typeColor)};
  opacity: ${props => (props.disabled ? '0.2' : '1')};
  padding: 15px 70px;
  border-radius: 20px;
  border: 2px solid
    ${props => getRightColorByContrast(props.typeColor, true, true)};
  font-weight: bold;
  box-shadow: 0 0 3px #0009;

  &.hvr-radial-out {
    background-color: ${props => colors[props.typeColor]};

    &:before {
      border-radius: 20px;
      background: ${props =>
        colors[`${props.typeColor}Light` as ColorsType] || colors.light};
    }
    &:hover {
      color: ${props => getRightColorByContrast(props.typeColor, false, true)};
    }
  }
`;
