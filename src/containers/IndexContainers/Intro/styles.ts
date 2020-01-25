import styled from 'styled-components';
import media from 'styled-media-query';

import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('assets/pattern.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: ${colors.light};
`;

export const IntroContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > div {
    margin-bottom: 20px;
    font-size: 20px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  > button:not(:last-child) {
    margin-right: 20px;
  }

  ${media.lessThan('medium')`
    flex-direction: column;
    > button:not(:last-child) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  `}
`;
