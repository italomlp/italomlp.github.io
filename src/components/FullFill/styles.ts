import styled from 'styled-components';

import colors from '~/styles/colors';

export type ContainerProps = {
  textColorInverse?: boolean;
  textColor?: keyof typeof colors;
  skew?: boolean;
  skewInverse?: boolean;
  willBeSkewd?: boolean;
  bgColor?: keyof Omit<typeof colors, 'light' | 'dark'>;
  customInnerPadding?: number;
  fullFill?: boolean;
};

const baseSkew = `
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  bottom: 100%;
  left: 0;
`;

const mountSkew = (props: ContainerProps) => {
  let skewReturn = '';
  if (props.skew) {
    skewReturn = baseSkew;

    if (props.skewInverse) {
      skewReturn += `
          border-right: 100vw solid transparent; 
          border-bottom: 40px solid ${
            props.bgColor ? colors[props.bgColor] : '#fff'
          };
        `;
    } else {
      skewReturn += `
          border-left: 100vw solid transparent; 
          border-bottom: 40px solid ${
            props.bgColor ? colors[props.bgColor] : '#fff'
          };
        `;
    }
  }
  return skewReturn
    ? `
      &:before {
        ${skewReturn}
      }
    `
    : null;
};

export const Container = styled.div<ContainerProps>`
  min-height: ${props =>
    props.fullFill || typeof props.fullFill !== 'boolean'
      ? '100vh'
      : 'initial'};
  /* height: 100%; */
  background: ${props => (props.bgColor ? colors[props.bgColor] : '#fff')};
  box-sizing: initial;
  color: ${props => {
    if (props.textColorInverse && !props.textColor) {
      return '#fff';
    }
    if (!props.textColorInverse && !props.textColor) {
      return '#000';
    }
    return props.textColor;
  }};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: ${props => (props.willBeSkewd ? '20px' : '0')};
  ${mountSkew}

  > div {
    width: 100%;
    height: 100%;
    padding: ${props =>
      typeof props.customInnerPadding === 'number'
        ? `${props.customInnerPadding}px`
        : '20px'};
  }
`;
