import styled from 'styled-components';
import media from 'styled-media-query';

import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const BackgroundSkew = styled.div`
  background-color: ${colors.primary};
  height: calc(50% - 20px);
  position: relative;

  &:after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 100%;
    left: 0;
    border-right: 100vw solid transparent;
    border-top: 40px solid ${colors.primary};
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid ${colors.secondary};
  box-shadow: 0 0 10px #0009;
  width: 100%;
  max-width: 600px;
  background-color: ${colors.light};

  ${media.lessThan('large')`
    width: 60%;
  `}
  ${media.lessThan('medium')`
    width: 80%;
  `}

  h1 {
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: ${colors.dark};
    font-weight: bold;
    border-color: ${colors.dark};
    border-bottom: 1px dotted;

    &:hover {
      border-color: ${colors.primary};
      color: ${colors.primary};
    }
  }
`;
