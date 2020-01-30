import React from 'react';
import DefaultFade from 'react-reveal/Fade';

// import { Container } from './styles';

type Props = {
  children: React.ReactElement | React.ReactElement[];
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
};

export default function Fade(props: Props) {
  return <DefaultFade duration={250} {...props} />;
}
