import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  width: 80%;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    margin-bottom: 15px;
  }

  ${media.lessThan('medium')`
    padding-bottom: 30px;
    width: 100%;
  `}
`;
