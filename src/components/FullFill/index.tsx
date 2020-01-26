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
  scrollName: string;
} & ContainerProps;

export default function FullFill({ children, scrollName, ...rest }: Props) {
  return (
    <Container id={scrollName} {...rest}>
      <div>{children}</div>
    </Container>
  );
}
