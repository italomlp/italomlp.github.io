import styled from 'styled-components';
import { Link } from 'gatsby';
import colors from '~/styles/colors';

export const MenuItem = styled.a`
  padding-bottom: 5px;
  border-bottom: 1px solid ${colors.light}5;
  margin-bottom: 15px;
  cursor: pointer;
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

export const LangsContainer = styled.div`
  margin-bottom: 30px;
  display: flex !important;
  justify-content: space-between;
  align-items: center;
`;

export const LangsLabel = styled.div`
  display: flex;
  align-items: center;

  > *:not(:last-child) {
    margin-right: 5px;
  }
`;

export const LangsContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LangButton = styled(Link).attrs(() => ({
  activeStyle: {
    fontWeight: 'bold',
  },
}))`
  text-decoration: none;
  color: ${colors.light};
  padding-right: 5px;

  &:not(:last-child) {
    margin-right: 5px;
    border-right: 1px solid ${colors.light};
  }
`;
