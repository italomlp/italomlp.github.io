import styled from 'styled-components';

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
  padding-bottom: 20px;
  width: 80%;

  &,
  * {
    color: ${colors.light} !important;
  }

  *::before {
    background-color: ${colors.light} !important;
  }

  a {
    text-decoration: none;
    border-bottom: 1px dotted #fff;

    &:not(:last-child) {
      margin-right: 5px;
    }
  }

  ${media.lessThan('medium')`
    padding-bottom: 30px;
    width: 100%;
  `}
`;

export const TextContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
