import styled from 'styled-components';
import colors from '~/styles/colors';

export const MenuItem = styled.a`
  padding-bottom: 5px;
  border-bottom: 1px solid ${colors.light}5;
  margin-bottom: 15px;
`;

export const MenuItemContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: bold;
  }
`;
