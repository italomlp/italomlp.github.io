import styled from 'styled-components';
import { Line, RCProgressProps } from 'rc-progress';
import media from 'styled-media-query';

import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  width: 80%;

  ${media.lessThan('medium')`
    padding-bottom: 30px;
    width: 100%;
  `}
`;

export const TextContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const SkillLine = styled(Line).attrs(() => ({
  strokeColor: colors.secondary,
  strokeLinecap: 'butt',
}))<RCProgressProps>`
  height: 10px;
  width: 100%;
`;

export const SkillContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  strong {
    ${media.lessThan('medium')`
      margin-bottom: -3vh;
    `}
  }
`;
