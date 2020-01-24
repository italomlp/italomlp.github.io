import React, { ButtonHTMLAttributes } from 'react';

import { Container, ButtonProps } from './styles';

type Props = {
  children: string | React.ReactElement | React.ReactElement[];
} & ButtonProps;

export default function Button({ children, ...restProps }: Props) {
  return (
    <Container className="hvr-radial-out" {...restProps}>
      {children}
    </Container>
  );
}
