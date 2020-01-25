import styled from 'styled-components';
import media from 'styled-media-query';

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

  ${media.lessThan('medium')`
    flex-direction: column;
    max-width: 100%;
  `}
`;

export const Avatar = styled.img`
  border-radius: 20px;
  max-width: 400px;
  margin-right: 20px;

  ${media.lessThan('large')`
    width: 40%;
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
