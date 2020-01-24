import React from 'react';

import { Container, ContainerProps } from './styles';

type Props = {
  children:
    | React.ReactChild
    | React.ReactChildren
    | React.ReactChild[]
    | React.ReactChildren[]
    | React.ReactElement
    | React.ReactElement[];
} & ContainerProps;

export default function FullFill({ children, ...rest }: Props) {
  return (
    <Container {...rest}>
      <div>{children}</div>
    </Container>
  );
}
