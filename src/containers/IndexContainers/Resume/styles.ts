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
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
  max-width: 80%;
  font-weight: 400;

  ${media.lessThan('medium')`
    flex-direction: column;
    max-width: 100%;
  `}
`;

export const TextContainer = styled.div`
  h2 {
    margin-bottom: 15px;
  }
`;

export const Avatar = styled.img`
  border-radius: 20px;
  border: 2px solid ${colors.primary};
  max-width: 400px;
  margin-right: 30px;

  ${media.lessThan('large')`
    width: 30vw;
  `}
  ${media.lessThan('medium')`
    width: 40%;
    margin-right: 0;
    margin-bottom: 20px;
  `}
  ${media.lessThan('small')`
    width: 50%;
  `}
`;
