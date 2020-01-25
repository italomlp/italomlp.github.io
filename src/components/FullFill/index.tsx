import React from 'react';
import Slide from 'react-reveal/Slide';

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
      <Slide left>
        <div>{children}</div>
      </Slide>
    </Container>
  );
}
