import React from 'react';
import { Line } from 'rc-progress';
// import { Container } from './styles';

export default function Skills() {
  return (
    <div>
      Skills <Line percent={30} strokeWidth={1} strokeColor="blue" />
    </div>
  );
}
