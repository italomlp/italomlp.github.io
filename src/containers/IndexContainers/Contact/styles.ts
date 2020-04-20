import styled from 'styled-components';
import media from 'styled-media-query';
import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
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

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const LinkContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  margin-bottom: 20px;

  &,
  * {
    color: ${colors.primary};
  }

  a {
    text-decoration: none;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }
`;
